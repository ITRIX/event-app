import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  /**
   * Output of search component
   * @memberof SearchComponent
   */
  @Input() searchChange: BehaviorSubject<string>;
  /**
   * Form of search component
   * @type {FormGroup}
   * @memberof SearchComponent
   */
  form: FormGroup;
  /**
   * Creates an instance of SearchComponent.
   * @memberof SearchComponent
   */
  constructor() { }

  /**
   * on init
   * @memberof SearchComponent
   */
  ngOnInit(): void {
    this.createForm();
    this.searchFieldControl.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe((value: string) => {
      console.log(value);
      this.searchChange.next(value);
    });
  }

  /**
   * Gets search field control
   * @readonly
   * @type {AbstractControl}
   * @memberof SearchComponent
   */
  get searchFieldControl(): AbstractControl {
    return this.form.get('searchField');
  }

  /**
   * Creates form
   * @private
   * @memberof SearchComponent
   */
  private createForm() {
    this.form = new FormGroup({
      searchField: new FormControl(''),
    });
  }

}
