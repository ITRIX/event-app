import { SessionStorageKeys } from './../../../core/enums/session-storage-keys.enum';
import { SpeakersService } from './speakers.service';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { ISpeaker } from '@interfaces/speakers';
import { map, switchMap } from 'rxjs/operators';
import { SessionStorageService } from '@services/session-storage.service';
import { Router } from '@angular/router';
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
   * Throttle of speaker list component
   * @memberof SpeakerListComponent
   */
  throttle = 100;
  /**
   * Scroll distance of speaker list component
   * @memberof SpeakerListComponent
   */
  scrollDistance = 1;
  /**
   * Speakers$ of speaker list component
   * @type {Observable<ISpeaker[]>}
   * @memberof SpeakerListComponent
   */
  speakers$: Observable<ISpeaker[]>;
  /**
   * Speakers list of speaker list component
   * @private
   * @type {ISpeaker[]}
   * @memberof SpeakerListComponent
   */
  private speakersList: ISpeaker[] = [];
  /**
   * Load more data$ of speaker list component
   * @private
   * @type {BehaviorSubject<boolean>}
   * @memberof SpeakerListComponent
   */
  private loadMoreData$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);
  /**
   * Creates an instance of SpeakerListComponent.
   * @param {SpeakersService} speakersService
   * @memberof SpeakerListComponent
   */
  /**
   * Speakers service of speaker list component
   * @private
   * @type {number}
   * @memberof SpeakerListComponent
   */
  private pageNo: number;
  /**
   * Page size of speaker list component
   * @private
   * @memberof SpeakerListComponent
   */
  private pageSize = 50;
  /**
   * Creates an instance of SpeakerListComponent.
   * @param {SpeakersService} speakersService
   * @memberof SpeakerListComponent
   */
  constructor(private speakersService: SpeakersService, private sessionStorage: SessionStorageService, private router: Router) { }
  /**
   * on init
   * @memberof SpeakerListComponent
   */
  ngOnInit(): void {
    this.pageNo = 1;
    this.speakers$ = combineLatest([
      this.loadMoreData$
    ]).pipe(
      switchMap(() => this.speakersService.getSpeakers(this.generateQuery()).pipe(
        map((result) => {
          this.speakersList.push(...result);
          return this.speakersList;
        })
      )),
    );
  }
  /**
   * Loads more
   * @memberof SpeakerListComponent
   */
  loadMore() {
    this.pageNo++;
    this.loadMoreData$.next(true);
  }
  /**
   * Shows details
   * @param {ISpeaker} speaker
   * @memberof SpeakerListComponent
   */
  showDetails(speaker: ISpeaker) {
    this.sessionStorage.setItem(SessionStorageKeys.USER_DETAILS, speaker);
    this.router.navigate(['speakers/details']);
  }
  /**
   * Generates query
   * @private
   * @returns {string}
   * @memberof SpeakerListComponent
   */
  private generateQuery(): string {
    const queryArray = [];
    queryArray.push(`?results=${this.pageSize}&page=${this.pageNo}`);
    return queryArray.join('');
  }
}
