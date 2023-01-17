import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpeakersRoutingModule } from './speakers-routing.module';
import { SpeakerListComponent } from './speaker-list';

/**
 * Ng module
 * @export
 * @class SpeakersModule
 */
@NgModule({
  declarations: [
    SpeakerListComponent
  ],
  imports: [
    CommonModule,
    SpeakersRoutingModule
  ]
})
export class SpeakersModule { }
