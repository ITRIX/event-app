import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SharedModule } from '@shared/shared.module';
import { TranslationLoaderService } from '@services/translation-loader.service';
import * as SpyHelper from '@helpers/spy-helpers';


describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let translateService: SpyHelper.SpyObj<TranslateService>;
  let translationLoaderService: SpyHelper.SpyObj<TranslationLoaderService>;
  let translateServiceSpy: jasmine.Spy;
  let translationLoaderServiceSpy: jasmine.Spy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        SharedModule,
        TranslateModule.forRoot(),
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [
        TranslateService,
        TranslationLoaderService
      ]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    translateService = TestBed.inject(TranslateService) as SpyHelper.SpyObj<TranslateService>;
    translationLoaderService = TestBed.inject(TranslationLoaderService) as SpyHelper.SpyObj<TranslationLoaderService>;
    translateServiceSpy = spyOn(translateService, 'addLangs');
    translateServiceSpy = spyOn(translateService, 'setDefaultLang');
    translationLoaderServiceSpy = spyOn(translationLoaderService, 'loadTranslations');
    fixture.detectChanges();
  });

  it('ngOnit', () => {
    spyOn(component, 'setLanguages');
    component.ngOnInit();
    expect(component.setLanguages).toHaveBeenCalled();
  });

  it('should call setLanguages', () => {
    component.setLanguages();
    expect(translationLoaderService.loadTranslations).toHaveBeenCalled();
  });

});
