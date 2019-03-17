
import { createSelector, createFeatureSelector, State } from '@ngrx/store';
import { ComponentAction, ComponentActionType } from './component-action';
import { INITIAL_EMAIL_STATE } from './app-state-object';

export const selectDrag = (state: any) => state.startDragPayload;
export const selectVisibleDrag = createSelector(selectDrag);
export function CrudEmailDesignerReducer(
  state: any = INITIAL_EMAIL_STATE,
  action: ComponentAction,
): any {
  switch (action.type) {
    case ComponentActionType.ADD_CONTAINER_ROW_AND_CELL:
    return state;
    default:
      return state;
  }
}

export const getPopupState = createFeatureSelector<any>('state');
export const getCurrentPopup = createSelector(
    getPopupState, 
    (state: any): any => { 
      console.log(state);
    return state;
  }
);

