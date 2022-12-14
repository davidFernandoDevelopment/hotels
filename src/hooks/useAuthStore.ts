import { toast } from 'react-toastify';

import { Credentetials, User } from '../auth';
import { useAppSelector, useAppDispatch } from './';
import { onLogin, onChecking, onLogout, onEditProfile } from '../store';
import {
	registerEmailPassword,
	Error,
	signInWithGoogle,
	signInEmailPassword,
	forgotPassword,
	signOutFirebase,
	updateProfileFirebase,
} from '../firebase';

export const useAuthStore = () => {
	const dispatch = useAppDispatch();
	const { user } = useAppSelector((state) => state.auth);

	const startLogin = async (credentials: Credentetials) => {
		try {
			dispatch(onChecking());
			const { ok, result } = await signInEmailPassword(credentials);

			if (!ok) {
				toast.error((result as Error).message);
				return dispatch(onLogout(result as Error));
			}

			toast.success('Login exitoso');
			dispatch(onLogin(result as User));
		} catch (err: any) {}
	};

	const startRegister = async (credentials: Credentetials) => {
		try {
			dispatch(onChecking());
			const { ok, result } = await registerEmailPassword(credentials);

			if (!ok) {
				toast.error((result as Error).message);
				return dispatch(onLogout(result as Error));
			}

			toast.success('Registro exitoso');
			dispatch(onLogin(result as User));
		} catch (err: any) {}
	};

	const startGoogleSignIn = async () => {
		try {
			dispatch(onChecking());
			const { ok, result } = await signInWithGoogle();

			if (!ok) {
				toast.error((result as Error).message);
				return dispatch(onLogout(result as Error));
			}

			toast.success('Registro con google existoso');
			dispatch(onLogin(result as User));
		} catch (err: any) {}
	};

	const startResetPassword = async (email: string) => {
		try {
			const { ok, result } = await forgotPassword(email);
			if (!ok) {
				toast.error((result as Error).message);
			} else {
				toast.success('Por favor revise su bandeja');
			}

			dispatch(onLogout(result as Error));
		} catch (error) {}
	};

	const startLogout = async () => {
		await signOutFirebase();
		dispatch(onLogout());
	};

	const startUpdateProfile = async (name: string) => {
		try {
			await updateProfileFirebase(name);
			dispatch(onEditProfile(name));
			toast.success('Se actualizo corrrectamente el nombre');
		} catch (error) {}
	};

	return {
		//* PROPIEDADES
		user,

		//* METODOS
		startLogin,
		startLogout,
		startRegister,
		startGoogleSignIn,
		startResetPassword,
		startUpdateProfile,
	};
};
