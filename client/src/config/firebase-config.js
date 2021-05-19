import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyA8Ot64znYq731i0ndQxSRJXilJupiKVhM',
	authDomain: 'node-authentication-b41ab.firebaseapp.com',
	projectId: 'node-authentication-b41ab',
	storageBucket: 'node-authentication-b41ab.appspot.com',
	messagingSenderId: '1031364674621',
	appId: '1:1031364674621:web:653f0a3712936514b39654',
};

export const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();
