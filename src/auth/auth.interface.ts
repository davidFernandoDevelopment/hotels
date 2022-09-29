export interface Credentetials {
	name?: string;
	email: string;
	password: string;
}

export interface User {
	uid: string;
	email: string;
	password: string;
	name?: string;
	photo?: string;
}
