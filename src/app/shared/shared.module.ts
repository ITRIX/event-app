import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

const sharedModules = [
  CommonModule,
  TranslateModule,
  InfiniteScrollModule
];
/**
 * Ng module
 * @export
 * @class SharedModule
 */
@NgModule({
  declarations: [],
  imports: [...sharedModules],
  exports: [...sharedModules],
})
export class SharedModule { }
