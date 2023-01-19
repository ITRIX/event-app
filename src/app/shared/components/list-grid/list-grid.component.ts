import { ISpeaker } from '@interfaces/speakers';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list-grid',
  templateUrl: './list-grid.component.html',
  styleUrls: ['./list-grid.component.scss']
})
export class ListGridComponent implements OnInit {
  /**
   * Throttle of list grid component
   * @memberof ListGridComponent
   */
  throttle = 100;
  /**
   * Scroll distance of list grid component
   * @memberof ListGridComponent
   */
  scrollDistance = 1;
  /**
   * Input of list grid component
   * @type {ISpeaker[]}
   * @memberof ListGridComponent
   */
  @Input('list') listData$: ISpeaker[];
  /**
   * Output of list grid component
   * @memberof ListGridComponent
   */
  @Output() loadData = new EventEmitter();
  /**
   * Output of list grid component
   * @memberof ListGridComponent
   */
  @Output() navigateToDetail = new EventEmitter<ISpeaker>();
  /**
   * Creates an instance of ListGridComponent.
   * @memberof ListGridComponent
   */
  constructor() { }
  /**
   * on init
   * @memberof ListGridComponent
   */
  ngOnInit(): void {
  }
}
