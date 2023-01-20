import { TestBed } from '@angular/core/testing';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { SessionStorageService } from './session-storage.service';
import { TranslationLoaderService } from './translation-loader.service';


xdescribe('Core/Services - Service: SessionStorageService', () => {
    let sessionStorageService: SessionStorageService;
    let storage: Storage;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                TranslateModule.forRoot()
            ],
            providers: [
                Storage
            ]
        });
    });

    beforeEach(() => {
        sessionStorageService = TestBed.inject(SessionStorageService);
        storage = TestBed.inject(Storage);
        spyOn(storage, 'getItem');
        spyOn(storage, 'getItem');
    });

    it('should be created', () => {
        expect(sessionStorageService).toBeTruthy();
    });

});
