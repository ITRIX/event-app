import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SpeakerDetailsComponent, SpeakerListComponent } from './speaker-list';

const routes: Routes = [
  {
    path: '',
    component: SpeakerListComponent,
  },
  {
    path: 'details',
    component: SpeakerDetailsComponent
  }
];

/**
 * Ng module
 * @export
 * @class SpeakersRoutingModule
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpeakersRoutingModule { }
