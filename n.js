var firebaseConfig = {
    apiKey: "AIzaSyA0JYm6Td4oSMeojk9tz6ymleUJeiN9Ykg",
    authDomain: "kirw-d3f6e.firebaseapp.com",
    databaseURL: "https://kirw-d3f6e-default-rtdb.firebaseio.com",
    projectId: "kirw-d3f6e",
    storageBucket: "kirw-d3f6e.appspot.com",
    messagingSenderId: "764390393130",
    appId: "1:764390393130:web:abad2713a1d22b233b8a53",
    measurementId: "G-RJV61Q8ZLW"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function getData()
{ firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
 //Inicia código
    console.log(firebase_message_id);
    console.log(message_data);
    names = message_data['name'];
    message = message_data['message'];
    like = message_data['like'];
    name_with_tag = "<h4> " + names + "<img class='user_tick' src='tick.png'></h4>";
    message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
    like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
    span_with_tag = "<span class= 'glyphicon glyphicon-thums-up'>Me gusta: " + like + "</span></button><hr>";

    row = name_with_tag + message_with_tag + like_button + span_with_tag;
    document.getElementById("output").innerHTML +=row;
    //Finaliza código
 } });  }); }
getData();

function send() { 
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
        name: user_name,
        message: msg,
        like: 0
    });
    document.getElementById("msg").value;
}

