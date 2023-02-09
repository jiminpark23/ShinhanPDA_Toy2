import firebase from 'firebase/app'; // 파이어베이스 기능 불러오기
import 'firebase/firestore'; // 파이어베이스의 파이어스토어 기능 불러오기

const firebaseConfig = {
    apiKey: "AIzaSyBWZVin0jbq-qMBaElWzAKfBFxy55mE6uo",
    authDomain: "my-todo1-4920f.firebaseapp.com",
    projectId: "my-todo1-4920f",
    storageBucket: "my-todo1-4920f.appspot.com",
    messagingSenderId: "1000806337122",
    appId: "1:1000806337122:web:164ca1763f218fd6729f3b"
};

export const db = firebase.initializeApp(firebaseConfig).firestore();