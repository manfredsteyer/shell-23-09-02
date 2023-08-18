import { createAction, props } from '@ngrx/store';
import { User } from '@shared/models';

export const userAuthenticatedWithOkta = createAction('[AppComponent] User Authenticated With Okta');
export const userLoggedIn = createAction('[AppComponent] User Logged In', props<{ user: User }>());
export const userLoginFailed = createAction('[UserEffects] Failed to Login', props<{ error: Error }>());
export const logoutButtonClicked = createAction('[HeaderComponent] Logout Button Clicked');
export const autoLogoutTimeoutExpired = createAction('[AutoLogoutService] Auto Logout Timeout Expired');
export const userLogoutFailed = createAction('[UserEffects] Failed to Logout', props<{ error: Error }>());
export const userLoggedOut = createAction('[UserEffects] User Logged Out');
// userUpdated is currently unused. add source e.g. '[UserManagementComponent] UserUpdated' if it gets used
export const userUpdated = createAction('UserUpdated', props<{ user: User }>());
export const usersLoaded = createAction('[UserEffects] Users Loaded', props<{ users: string[] }>());
export const userPermissionsLoaded = createAction('[UserEffects] UserPermissions Loaded', props<{ userPermissions: string[] }>()
);
