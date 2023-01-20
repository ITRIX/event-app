import { SpeakersService } from './speakers.service';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable, of } from 'rxjs';
import { ISpeaker } from '@interfaces/speakers';
import { map, switchMap } from 'rxjs/operators';
import { SessionStorageService } from '@services/session-storage.service';
import { Router } from '@angular/router';
import { SessionStorageKeys } from '@enums/session-storage-keys.enum';
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
   * Search result$ of speaker list component
   * @type {BehaviorSubject<boolean>}
   * @memberof SpeakerListComponent
   */
  searchResult$: BehaviorSubject<string> = new BehaviorSubject<string>(null);
  /**
   * Speakers$ of speaker list component
   * @type {Observable<ISpeaker[]>}
   * @memberof SpeakerListComponent
   */
  speakers$: Observable<ISpeaker[]>;
  /**
 * Page no of speaker list component
 * @type {number}
 * @memberof SpeakerListComponent
 */
  pageNo: number;
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
  constructor(
    private speakersService: SpeakersService,
    private sessionStorage: SessionStorageService,
    private router: Router) { }
  /**
   * on init
   * @memberof SpeakerListComponent
   */
  ngOnInit(): void {
    this.pageNo = 1;
    this.speakers$ = combineLatest([
      this.loadMoreData$,
      this.searchResult$
    ]).pipe(
      switchMap(([_, term]) => (!!term) ? of(this.filterData(this.speakersList, term)) : this.speakersService.getSpeakers(this.generateQuery()).pipe(
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
  /**
   * Filters data
   * @private
   * @param {ISpeaker[]} result
   * @param {string} term
   * @returns
   * @memberof SpeakerListComponent
   */
  private filterData(result: ISpeaker[], term: string) {
    return !!term ? result.filter((item) => item.name.first.toLowerCase().includes(term.toLowerCase())) : result;
  }
}
