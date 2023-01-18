import { Router } from '@angular/router';
import { SessionStorageService } from '@services/session-storage.service';
import { Component, OnInit } from '@angular/core';
import { SessionStorageKeys } from '@enums/session-storage-keys.enum';
import { ISpeaker } from '@interfaces/speakers';

/**
 * Component
 * @export
 * @class SpeakerDetailsComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-speaker-details',
  templateUrl: './speaker-details.component.html',
  styleUrls: ['./speaker-details.component.scss']
})
export class SpeakerDetailsComponent implements OnInit {
  /**
   * User details of speaker details component
   * @type {ISpeaker}
   * @memberof SpeakerDetailsComponent
   */
  userDetails: ISpeaker;
  /**
   * Creates an instance of SpeakerDetailsComponent.
   * @param {SessionStorageService} sessionStorageService
   * @param {Router} router
   * @memberof SpeakerDetailsComponent
   */
  constructor(private sessionStorageService: SessionStorageService, private router: Router) { }

  /**
   * on init
   * @memberof SpeakerDetailsComponent
   */
  ngOnInit(): void {
    this.userDetails = this.sessionStorageService.getItem(SessionStorageKeys.USER_DETAILS) as unknown as ISpeaker;
  }

  /**
   * Backs to speakers
   * @memberof SpeakerDetailsComponent
   */
  backToSpeakers(): void {
    this.router.navigate(['speakers']);
  }

  /**
   * Gets full name
   * @readonly
   * @type {string}
   * @memberof SpeakerDetailsComponent
   */
  get fullName(): string {
    return `${this.userDetails.name.title}. ${this.userDetails.name.first} ${this.userDetails.name.last}`;
  }

  /**
   * Gets address
   * @readonly
   * @type {string}
   * @memberof SpeakerDetailsComponent
   */
  get address(): string {
    return `${this.userDetails.location.city}, ${this.userDetails.location.state}, ${this.userDetails.location.country}`;
  }

}
