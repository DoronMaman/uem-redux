// import { CrudEmailDesignerReducer } from './designer/reducers/crud-email-designer-reducer';
import { ActionReducerMap, combineReducers} from '@ngrx/store';
import { CrudEmailDesignerReducer } from './crud-email-designer-reducer';


  // todo change to interfaces
  export interface FullState {
    EmailState: any;
   
  }
  
  export const AppReducer: ActionReducerMap<FullState> = {
    EmailState: CrudEmailDesignerReducer,
  
  };

