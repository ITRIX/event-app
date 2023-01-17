import { Injectable, Inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

/**
 * Injectable
 * @export
 * @class TranslationLoaderService
 */
@Injectable({
    providedIn: 'root'
})
export class TranslationLoaderService {
    /**
     * Creates an instance of TranslationLoaderService.
     * @param {TranslateService} translate
     * @memberof TranslationLoaderService
     */
    constructor(@Inject(TranslateService) private readonly translate: TranslateService) { }
    /**
     * Loads translations
     * @param {...any[]} args
     * @memberof TranslationLoaderService
     */
    loadTranslations(...args: any[]) {
        const locales = [...args];
        locales.forEach((locale: any) => {
            this.translate.setTranslation(locale.lang, locale.data, true);
        });
    }
}
