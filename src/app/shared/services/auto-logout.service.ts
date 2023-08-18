// import { Injectable } from '@angular/core';
// import { Store } from '@ngrx/store';
// import { timer } from 'rxjs';
// import {filter, map, switchAll, tap} from 'rxjs/operators';
// import {AppState} from '@app/store/app.state';
// import {AppConfig} from '@app/app.config';
// import {UserActions, UserSelectors} from '@app/store/user';
//
// @Injectable()
// export class AutoLogoutService {
//     currentTimeout: any; //of type NodeJS.Timeout, but that doesn't compile
//     constructor(private store: Store<AppState>, private appConfig: AppConfig) {
//       this.store.select(UserSelectors.selectUserLoggedIn)
//         .pipe(
//           filter((loggedIn) => loggedIn),
//           map(() => timer(2 * 60 * 1000)),
//           // map(() => timer(appConfig.timeoutMinutes * 60 * 1000)),
//           switchAll(),
//           tap(() => {
//             console.log('Inactivity interval expired! Dispatching timeout event');
//             clearTimeout(this.currentTimeout);
//             this.store.dispatch(UserActions.autoLogoutTimeoutExpired());
//           })
//         )
//         .subscribe();
//     }
//
// }
