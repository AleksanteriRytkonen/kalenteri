import {Routes, RouterModule} from "@angular/router";
import {KalenteriComponent} from "./kalenteri/kalenteri.component";

const APP_ROUTES: Routes = [
    { path: '', component: KalenteriComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);