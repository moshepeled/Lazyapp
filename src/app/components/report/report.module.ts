import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FormsModule} from "@angular/forms";

// containers
import { ReportComponent } from './report.component';

// routes
export const ROUTES: Routes = [
    { path: '', component: ReportComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(ROUTES),
        FormsModule
    ],
    declarations: [
        ReportComponent
    ]
})
export class ReportModule { }
