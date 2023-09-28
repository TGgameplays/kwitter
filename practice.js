
//ADICIONE OS LINKS DO SEU APP FIREBASE
const firebaseConfig = {
  apiKey: "AIzaSyBHiQ7f19FNnUz26y0ZJW1v1F0FR9w-vaU",
  authDomain: "kwitter-d9aa4.firebaseapp.com",
  databaseURL: "https://kwitter-d9aa4-default-rtdb.firebaseio.com",
  projectId: "kwitter-d9aa4",
  storageBucket: "kwitter-d9aa4.appspot.com",
  messagingSenderId: "655146426515",
  appId: "1:655146426515:web:cfc4d96c43e1132001ad66"
};


// Inicializar Firebase
   firebase.initializeApp(firebaseConfig);


function addUser()
{
  user_name = document.getElementById("user_name").value;
  firebase.database().ref("/").child(user_name).update({
    purpose : "adicionando usuário"
  });
}


