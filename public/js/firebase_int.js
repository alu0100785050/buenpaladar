var config = {
  apiKey: "AIzaSyCrXSZWpBdn8HTiwEEySQ9Q4r4ZOE5jwIU",
  authDomain: "practicasipc-e2448.firebaseapp.com",
  databaseURL: "https://practicasipc-e2448.firebaseio.com",
  projectId: "practicasipc-e2448",
  storageBucket: "practicasipc-e2448.appspot.com",
  messagingSenderId: "110438816831"
};

firebase.initializeApp(config);

const firestore = firebase.firestore();
const settings = {/* your settings... */ timestampsInSnapshots: true};
firestore.settings(settings);

var db = firebase.firestore();
var database = firebase.database();

allCookies = document.cookies;
console.log(allCookies);
