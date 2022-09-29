import {
	updateProfile,
	User as UserFirebase,
	createUserWithEmailAndPassword,
} from 'firebase/auth';

import { Error, Response } from './interface';
import { Credentetials, User } from '../auth';
import { FirebaseAuth, FirebaseDB } from './config';
import { doc, serverTimestamp, setDoc } from 'firebase/firestore';

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
