 import firebase from 'firebase/compat/app';
 import 'firebase/compat/storage';
 import 'firebase/compat/firestore';

 
 // Your web app's Firebase configuration
 const firebaseConfig = {
    apiKey: "AIzaSyDwIr75hGk5Fy7NgY0wHzYoVcTbVf4wGSk",
    authDomain: "calci-vault.firebaseapp.com",
    projectId: "calci-vault",
    storageBucket: "calci-vault.appspot.com",
    messagingSenderId: "346817059890",
    appId: "1:346817059890:web:67abba2719529f20c1b02b"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const projectStorage= firebase.storage();
  const projectFirestore=firebase.firestore();
  const timestamp= firebase.firestore.FieldValue.serverTimestamp;

  export{projectFirestore, projectStorage,timestamp};
