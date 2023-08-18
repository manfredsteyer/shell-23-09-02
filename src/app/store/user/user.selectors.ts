import { User } from '@shared/models';
import { createSelector } from '@ngrx/store';
import { AppState } from '@app/store/app.state';


export const selectUser = (state: AppState) => state.user;

export const selectUserLoggedIn = createSelector(selectUser, (state) => state?.loggedIn);
