import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// containers
import { SettingComponent } from './setting.component';

// routes
export const ROUTES: Routes = [
    { path: '', component: SettingComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(ROUTES)
    ],
    declarations: [
        SettingComponent
    ]
})
export class SettingModule { }
