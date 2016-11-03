import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from "./app.component";
import {routing} from "./app.routing";
import {KalenteriComponent} from "./kalenteri/kalenteri.component";

@NgModule({
    declarations: [
        AppComponent,
        KalenteriComponent
    ],
    imports: [
        BrowserModule,
        routing
    ],
    bootstrap: [AppComponent]
})
export class AppModule {

}