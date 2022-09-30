import {
	updateProfile,
	signInWithPopup,
	GoogleAuthProvider,
	User as UserFirebase,
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
} from 'firebase/auth';

import { Error, Response } from './interface';
import { Credentetials, User } from '../auth';
import { FirebaseAuth, FirebaseDB } from './config';
import { doc, getDoc, serverTimestamp, setDoc } from 'firebase/firestore';

const googleProvider = new GoogleAuthProvider();
export const signInWithGoogle = async (): Promise<Response<User | Error>> => {
	try {
		const result = await signInWithPopup(FirebaseAuth, googleProvider);
		const { uid, email, photoURL, displayName } = result.user;

		const docRef = doc(FirebaseDB, 'users', result.user.uid);
		const docSnap = await getDoc(docRef);
		if (!docSnap.exists()) {
			const newDoc = {
				email,
				name: displayName,
				timestamp: serverTimestamp(),
			};
			await setDoc(docRef, newDoc);
		}

		return {
			ok: true,
			result: {
				uid,
				email: email as string,
				photo: photoURL as string,
				name: displayName as string,
			},
		};
	} catch (err: any) {
		return {
			ok: false,
			result: {
				code: err.code,
				message: err.message,
			},
		};
	}
};

export const registerEmailPassword = async ({
	email,
	password,
	name,
}: Credentetials): Promise<Response<User | Error>> => {
	try {
		const res = await createUserWithEmailAndPassword(
			FirebaseAuth,
			email,
			password
		);
		await updateProfile(FirebaseAuth.currentUser as UserFirebase, {
			displayName: name,
		});

		const newDoc = {
			email,
			name,
			timestamp: serverTimestamp(),
		};
		await setDoc(doc(FirebaseDB, 'users', res.user.uid), newDoc);

		return {
			ok: true,
			result: {
				email,
				password,
				uid: res.user.uid,
			},
		};
	} catch (error: any) {
		return {
			ok: false,
			result: {
				code: error.code,
				message: error.message,
			},
		};
	}
};

export const signInEmailPassword = async ({
	email,
	password,
}: Credentetials): Promise<Response<User | Error>> => {
	try {
		const res = await signInWithEmailAndPassword(FirebaseAuth, email, password);
		const { uid, photoURL, displayName } = res.user;

		return {
			ok: true,
			result: {
				uid,
				email,
				photo: photoURL as string,
				name: displayName as string,
			},
		};
	} catch (error: any) {
		return {
			ok: false,
			result: {
				code: error.code,
				message: error.message,
			},
		};
	}
};
