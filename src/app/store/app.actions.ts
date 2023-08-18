import {createAction, props} from '@ngrx/store';

export const genericError = createAction('[AppEffects] Error', props<{error: {message: string}}>());
