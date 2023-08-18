import {Injectable} from '@angular/core';
import {Actions, concatLatestFrom, createEffect, ofType} from '@ngrx/effects';
import {Store} from '@ngrx/store';
import {catchError, combineLatestWith, filter, map, switchMap, tap} from 'rxjs/operators';
import {LoggingService} from '@shared/services';

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions,
              private loggingService: LoggingService) {
  }

  // this effect watches ALL actions to see if they have an "error" property. This is a good example of how to create a generic
  //  effect that can be applied across all actions by looking for a particular property in all action payloads before acting.
  genericErrorHandler$ = createEffect(() =>
    this.actions$.pipe(
      filter(action => {
        return !!action['error'];
      }),
      tap(action => {
        // customize error handling for your app
        return this.loggingService.error(action['error']?.message);
      })
    ),
    { dispatch: false }
  );

}
