export interface Error {
	code: string;
	message: string;
}

export interface Response<T> {
	ok: boolean;
	result: T;
}
