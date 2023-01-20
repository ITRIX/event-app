import { ISpeaker } from '@interfaces/speakers';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { SessionStorageService } from '@services/session-storage.service';
import { SharedModule } from '@shared/shared.module';
import * as SpyHelper from '@helpers/spy-helpers';

import { SpeakerDetailsComponent } from './speaker-details.component';
import { Router } from '@angular/router';

describe('SpeakerDetailsComponent', () => {
  let component: SpeakerDetailsComponent;
  let fixture: ComponentFixture<SpeakerDetailsComponent>;
  let sessionStorageService: SpyHelper.SpyObj<SessionStorageService>;
  let router: Router;
  let routerNavigateSpy: jasmine.Spy;

const mockData = {
  name: {
    title: 'Mr',
    first: 'Thomas',
    last: 'Cook'
  },
  location: {
    state: 'Washington',
    city: 'Seattle',
    country: 'US'

  }
} as ISpeaker;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        SharedModule,
        TranslateModule.forRoot(),
        RouterTestingModule
      ],
      providers: [
        SpyHelper.provideClass(SessionStorageService),
      ],
      declarations: [ SpeakerDetailsComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeakerDetailsComponent);
    component = fixture.componentInstance;
    sessionStorageService = TestBed.inject(SessionStorageService) as SpyHelper.SpyObj<SessionStorageService>;
    sessionStorageService.getItem.and.returnValue(mockData);
    router = TestBed.inject(Router);
    routerNavigateSpy = spyOn(router, 'navigate').and.callFake((arg1: string[]) => ({} as any));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ngOnit', () => {
    component.ngOnInit();
    expect(component.userDetails).toEqual(mockData);
  });

  it('should navigate to back', () => {
    component.backToSpeakers();
    expect(routerNavigateSpy).toHaveBeenCalled();
  });

});
