import { SpeakersService } from './speakers.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ISpeaker } from '@interfaces/speakers';
/**
 * Component
 * @export
 * @class SpeakerListComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-speaker-list',
  templateUrl: './speaker-list.component.html',
  styleUrls: ['./speaker-list.component.scss']
})
export class SpeakerListComponent implements OnInit {
  /**
   * Speakers$ of speaker list component
   * @type {Observable<ISpeaker[]>}
   * @memberof SpeakerListComponent
   */
  speakers$: Observable<ISpeaker[]>;
  /**
   * Creates an instance of SpeakerListComponent.
   * @param {SpeakersService} speakersService
   * @memberof SpeakerListComponent
   */
  constructor(private speakersService: SpeakersService) { }
  /**
   * on init
   * @memberof SpeakerListComponent
   */
  ngOnInit(): void {
    this.speakers$ = this.speakersService.getSpeakers();
  }
}
