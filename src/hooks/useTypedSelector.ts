import { shallowEqual, type TypedUseSelectorHook, useSelector } from 'react-redux';
import { type RootState } from 'redux/store';

export const useTypedSelector: TypedUseSelectorHook<RootState> = <T>(selector: (state: RootState) => T) =>
  useSelector<RootState, T>(selector, shallowEqual);
