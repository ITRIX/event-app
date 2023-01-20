import { TestBed } from '@angular/core/testing';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslationLoaderService } from './translation-loader.service';


describe('Core/Services - Service: TranslationLoader', () => {
    let translationLoaderService: TranslationLoaderService;
    let translateService: TranslateService;
    let translateServiceSpy: jasmine.Spy;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                TranslateModule.forRoot()
            ],
            providers: [
                TranslationLoaderService,
                TranslateService
            ]
        });
    });

    beforeEach(() => {
        translationLoaderService = TestBed.inject(TranslationLoaderService);
        translateService = TestBed.inject(TranslateService);
        translateServiceSpy = spyOn(translateService, 'setTranslation');

    });

    it('should be created', () => {
        expect(translationLoaderService).toBeTruthy();
    });

    it('should loadTranslations', () => {
        translationLoaderService.loadTranslations(...['de', 'en']);
        expect(translateService.setTranslation).toHaveBeenCalled();
      });
});
