var firebaseConfig = {
      apiKey: "AIzaSyCO2ONB6Ir3H2E2O9Xz3lk8dmE_b_ottu0",
      authDomain: "classkwitter.firebaseapp.com",
      databaseURL: "https://classkwitter-default-rtdb.firebaseio.com",
      projectId: "classkwitter",
      storageBucket: "classkwitter.appspot.com",
      messagingSenderId: "502319638260",
      appId: "1:502319638260:web:08bf1f9e71d767aabe60a1"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });

      document.getElementById("msg").value = "";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name")
      window.location = "index.html";
}
