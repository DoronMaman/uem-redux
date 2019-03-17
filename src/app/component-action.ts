import { Action } from "@ngrx/store";

export enum ComponentActionType {
 
  ADD_CONTAINER_ROW_AND_CELL = "ADD_CONTAINER_ROW_AND_CELL"
 
}



export class AddContainerComponentRowAndCellAction implements Action {
  readonly type = ComponentActionType.ADD_CONTAINER_ROW_AND_CELL;
  constructor(public payload: {rowPayload: any, rowParentId: string, addInIndex?: number}) {}
}


export type ComponentAction = AddContainerComponentRowAndCellAction;

