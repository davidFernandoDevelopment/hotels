import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';

import { FirebaseAuth } from '../firebase/config';
import { onLogin, onLogout, Status } from '../store';
import { useAppDispatch, useAppSelector } from './useRedux';

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
