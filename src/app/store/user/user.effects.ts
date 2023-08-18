import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {catchError, of as observableOf} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';
import * as UserActions from './user.actions';
//import {AuthService} from '@signifyhealth/angular-common';

@Injectable()
export class UserEffects {
  constructor(private actions$: Actions) {
  }

  //getUserOnAuthentication$ = createEffect(() =>
  //  this.actions$.pipe(
  //    ofType(UserActions.userAuthenticatedWithOkta),
  //    switchMap((action) => {
  //      return this.authService.getUser()
  //        .pipe(
  //          map((user) => UserActions.userLoggedIn({user: {...user}})),
  //          catchError((error) => {
  //            return observableOf(UserActions.userLoginFailed({error}));
  //          })
  //        );
  //    }),
  //  )
  //);

  //logoutUser$ = createEffect(() =>
  //  this.actions$.pipe(
  //    ofType(UserActions.logoutButtonClicked),
  //    switchMap((action) => {
  //      return this.authService.logout()
  //        .pipe(
  //          map((user) => UserActions.userLoggedOut()),
  //          catchError((error) => {
  //            return observableOf(UserActions.userLogoutFailed({error}));
  //          })
  //        );
  //    }),
  //  )
  //);
}
