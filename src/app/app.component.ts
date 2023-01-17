import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { TranslationLoaderService } from '@services/translation-loader.service';
import { locale as de } from '@i18n/de';
import { locale as en } from '@i18n/en';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  /**
   * Languages of app component
   * @private
   * @type {string[]}
   * @memberof AppComponent
   */
  private _languages: string[];
  /**
   * Default language of app component
   * @private
   * @memberof AppComponent
   */
  private readonly _defaultLanguage = 'en';
  /**
   * Creates an instance of AppComponent.
   * @param {TranslateService} translateService
   * @param {TranslationLoaderService} translationLoader
   * @memberof AppComponent
   */
  constructor(
    private readonly translateService: TranslateService,
    private readonly translationLoader: TranslationLoaderService,
  ) {}
  /**
   * on init
   * @memberof AppComponent
   */
  ngOnInit(): void {
    this._languages = ['de', 'en'];
    this.setLanguages();

  }
  /**
   * Sets languages
   * @memberof AppComponent
   */
  setLanguages(): void {
    this.translateService.addLangs(this._languages);
    this.translationLoader.loadTranslations(de, en);
    this.translateService.setDefaultLang(this._defaultLanguage);
  }

}
