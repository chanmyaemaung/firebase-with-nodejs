import { useEffect, useState } from 'react';
import firebase from 'firebase/app';
import { auth as firebaseAuth } from '../config/firebase-config';
import './App.css';
import ShowData from '../components/ShowData';

const App = () => {
	const [auth, setAuth] = useState(
		false || window.localStorage.getItem('auth', 'true')
	);
	const [token, setToken] = useState('');

	useEffect(() => {
		firebaseAuth.onAuthStateChanged((userCredential) => {
			if (userCredential) {
				setAuth(true);

				window.localStorage.setItem('auth', 'true');

				userCredential.getIdToken().then((token) => {
					setToken(token);
				});
			}
		});
	}, []);

	const loginWithGoogle = () => {
		firebaseAuth
			.signInWithPopup(new firebase.auth.GoogleAuthProvider())
			.then((userCredential) => {
				if (userCredential) {
					setAuth(true);
					window.localStorage.setItem('auth', 'true');
				}
			});
	};

	return (
		<>
			<div className='loginBox'>
				{auth ? (
					<ShowData token={token} />
				) : (
					<button onClick={loginWithGoogle}>Login with Google</button>
				)}
			</div>
		</>
	);
};

export default App;
