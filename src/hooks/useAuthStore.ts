import { toast } from 'react-toastify';

import { Credentetials, User } from '../auth';
import { useAppSelector, useAppDispatch } from './';
import { onLogin, onChecking, onLogout } from '../store';
import { registerEmailPassword, Error } from '../firebase';

export const useAuthStore = () => {
	const dispatch = useAppDispatch();
	const { user } = useAppSelector((state) => state.auth);

	const startLogin = async () => {};

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

	return {
		//* PROPIEDADES
		user,

		//* METODOS
		startLogin,
		startRegister,
	};
};
