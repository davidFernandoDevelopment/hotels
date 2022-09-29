import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyCbrBlBGtRgkodRta2Cq50uJAwoQzF-TxA',
	authDomain: 'hotels-960dd.firebaseapp.com',
	projectId: 'hotels-960dd',
	storageBucket: 'hotels-960dd.appspot.com',
	messagingSenderId: '974031803219',
	appId: '1:974031803219:web:94348af262da1d84f3c7a6',
};
export const FirebaseApp = initializeApp(firebaseConfig);


export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
