import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';

import { AppDispatch, RootState } from '../store/types';

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
