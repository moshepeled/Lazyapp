import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// containers
import { ReportComponent } from './report.component';

// routes
export const ROUTES: Routes = [
    { path: '', component: ReportComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(ROUTES)
    ],
    declarations: [
        ReportComponent
    ]
})
export class ReportModule { }
