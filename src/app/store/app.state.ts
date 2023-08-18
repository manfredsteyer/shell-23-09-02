import {RouterState} from '@ngrx/router-store';
import {User} from '@shared/models';

export interface AppState {
  router: RouterState,
  user?: User;
}
