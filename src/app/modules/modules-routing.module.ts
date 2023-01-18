import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'speakers',
        pathMatch: 'full'
    },
    {
        path: 'speakers',
        loadChildren: () => import('@modules/speakers/speakers.module').then(m => m.SpeakersModule)
    }
];
/**
 * Ng module
 * @export
 * @class ModulesRoutingModule
 */
@NgModule({
    imports: [
        RouterModule.forChild(ROUTES)
    ],
    exports: [
        RouterModule
    ]
})
export class ModulesRoutingModule { }
