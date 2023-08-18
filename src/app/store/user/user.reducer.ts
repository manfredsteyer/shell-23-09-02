import {Action, createReducer, on} from '@ngrx/store';
import { User } from '@shared/models';
import * as UserActions from './user.actions';

const initialUserState: User = {
    loggedIn: false,
    operations: [],
};

const _userReducer = createReducer(
    initialUserState,

    on(UserActions.userLoggedIn, (state, { user }) => {
        return { ...state, ...user, loggedIn: true };
    }),
    on(UserActions.userLoggedOut, (state, action) => {
        return { ...state, ...initialUserState };
    }),
    on(UserActions.userUpdated, (state, { user }) => {
        return { ...state, ...user };
    }),
    on(UserActions.userPermissionsLoaded, (state, action) => {
        return { ...state, operations: action.userPermissions };
    })
);

// this eliminates the error...
// "Type 'ActionReducer<User, Action>' is not assignable to type 'ActionReducer<User | undefined, Action>'
export function userReducer(state: User | undefined, action: Action) {
  return _userReducer(state, action);
}
