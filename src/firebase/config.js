// import '@firebase/auth';
// import '@firebase/firestore';

import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCXMQ1aC9RjFVRLF8Hwx7E4Nn6hDkZ2_-Y", // done
  authDomain: "ksuclubs-28609.firebaseapp.com", //done
  databaseURL: "https://ksuclubs-28609.firebaseio.com", //done
  projectId: "ksuclubs-28609", //done
  storageBucket: "ksuclubs-28609.appspot.com", //done
  messagingSenderId: "813434469957", //done
  appId: "i1:813434469957:ios:e0dad1b5e4e85b0c112d2c", //done
};

// const firebaseConfig = {
//   apiKey: "AIzaSyDrp2CrdZGBgOOja7UavIZ-Y9kvNoSwqW8",
//   authDomain: "ksuclubs-e58d9.firebaseapp.com",
//   databaseURL: "https://ksuclubs-e58d9.firebaseio.com",
//   projectId: "ksuclubs-e58d9",
//   storageBucket: "ksuclubs-e58d9.appspot.com",
//   messagingSenderId: "798237994822",
//   appId: "1:798237994822:web:ca53081ae47079ebd1ff47",
//   measurementId: "G-4VLBGPRP3Q"

// };

firebase.initializeApp(firebaseConfig);

export default firebase;
