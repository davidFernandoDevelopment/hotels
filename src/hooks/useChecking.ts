import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';

import { useAppDispatch } from './';
import { useAppSelector } from './useRedux';
import { FirebaseAuth } from '../firebase/config';
import { onLogin, onLogout, Status } from '../store';

export const useChecking = (): Status => {
	const dispatch = useAppDispatch();
	const { status } = useAppSelector((state) => state.auth);

	useEffect(() => {
		onAuthStateChanged(FirebaseAuth, async (user) => {
			if (!user) return dispatch(onLogout());

			dispatch(
				onLogin({
					uid: user.uid,
					email: user.email!,
					photo: user.photoURL!,
					name: user.displayName!,
				})
			);
		});
	}, [dispatch]);

	return status;
};
