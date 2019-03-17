import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { AppReducer } from './app.reducer';
import { INITIAL_APPLICATION_STATE } from './init-application-state';
import { StyleManagerComponent } from './style-manager/style-manager.component';
import { DesignerComponent } from './designer/designer.component';
export function getInitialState() {
  return { ...INITIAL_APPLICATION_STATE };
}
@NgModule({
  declarations: [
    AppComponent,
    StyleManagerComponent,
    DesignerComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(AppReducer , { initialState: getInitialState }),
    StoreDevtoolsModule.instrument({ maxAge: 25 }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
