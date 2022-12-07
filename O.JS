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
document.getElementById("user_name").innerHTML = "Buenas  " + user_name;

function addRoom() {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({ purpose: "Agregar nombre de sala" }); localStorage.setItem("room_name", room_name);

    window.location = "f.html"
}

function getData() {
    firebase.database().ref("/").on('value', function(snapshot) 
    {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) 
    {childKey  = childSnapshot.key;
         Room_names = childKey;
        //Inicio del código
        console.log("Nombres de salas -" + Room_names);
        row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#" + Room_names +"</div><hr>";
        document.getElementById("output").innerHTML += row;
  
        //Final del código
        }); }); }
    getData();
  
    function redirectToRoomName(name)
    {
      console.log(name);
      localStorage.setItem("room_name" , name);
      window.location ="f.html";
    }