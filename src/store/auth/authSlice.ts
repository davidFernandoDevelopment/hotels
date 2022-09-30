import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { User } from '../../auth';
import { Error } from '../../firebase';

export type Status = 'authenticated' | 'not-authenticated' | 'checking';
interface AuthState {
	status: Status;
	user: User | null;
	error: Error | null;
}

const initialState: AuthState = {
	user: null,
	error: null,
	status: 'checking',
};

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		onChecking: (state: AuthState) => {
			state.user = null;
			state.error = null;
			state.status = 'checking';
		},
		onLogin: (state: AuthState, { payload }: PayloadAction<User>) => {
			state.error = null;
			state.user = payload;
			state.status = 'authenticated';
		},
		onLogout: (
			state: AuthState,
			{ payload }: PayloadAction<Error | undefined>
		) => {
			state.user = null;
			state.status = 'not-authenticated';
			state.error = payload ? payload : null;
		},
	},
});

export const { onChecking, onLogin, onLogout } = authSlice.actions;
export default authSlice.reducer;
