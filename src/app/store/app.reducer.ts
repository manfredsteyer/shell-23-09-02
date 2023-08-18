import {Action, ActionReducer, ActionReducerMap, MetaReducer} from '@ngrx/store';
import {routerReducer, RouterState} from '@ngrx/router-store';
import {userReducer} from '@app/store/user';
import {AppState} from '@app/store/app.state';

export const appReducer: ActionReducerMap<AppState> = {
  router: routerReducer,
  user: userReducer,
};

export const metaReducer: MetaReducer<AppState>[] = [];
// export const metaReducer: MetaReducer<AppState>[] = !environment.production ? [logger] : [];

// example of a metaReducer - any functionality you want called upon ANY reducer firing...
export function logger(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action) => {
    console.log('state before: ', state);
    console.log('action', action);

    return reducer(state, action);
  };
}
