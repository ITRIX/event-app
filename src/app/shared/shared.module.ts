import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ListGridComponent, SearchComponent } from './components';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const sharedModules = [
  CommonModule,
  TranslateModule,
  InfiniteScrollModule,
  FormsModule,
  ReactiveFormsModule
];

const sharedComponents =[
  ListGridComponent,
  SearchComponent
];

/**
 * Ng module
 * @export
 * @class SharedModule
 */
@NgModule({
  declarations: [
    ...sharedComponents
  ],
  imports: [...sharedModules],
  exports: [...sharedModules, ...sharedComponents],
})
export class SharedModule { }
