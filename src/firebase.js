import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDR2yvaP3fWN9SzY7XbEclFDFfYFecSTQ8",
    authDomain: "netflix-clone-e7d9c.firebaseapp.com",
    projectId: "netflix-clone-e7d9c",
    storageBucket: "netflix-clone-e7d9c.appspot.com",
    messagingSenderId: "77110292918",
    appId: "1:77110292918:web:b22fd9ac8e6c2c0986d117"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();

  export {auth};
  export default db;