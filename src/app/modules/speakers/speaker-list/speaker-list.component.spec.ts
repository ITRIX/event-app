import { ISpeaker } from '@interfaces/speakers';
import { of } from 'rxjs';
import { SharedModule } from '@shared/shared.module';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import * as SpyHelper from '@helpers/spy-helpers';
import { SpeakerListComponent } from './speaker-list.component';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { SpeakersService } from './speakers.service';
import { Router } from '@angular/router';

describe('SpeakerListComponent', () => {
  let component: SpeakerListComponent;
  let fixture: ComponentFixture<SpeakerListComponent>;
  let speakersService: SpyHelper.SpyObj<SpeakersService>;
  let router: Router;
  let routerNavigateSpy: jasmine.Spy;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [
          HttpClientTestingModule,
          SharedModule,
          TranslateModule.forRoot(),
          RouterTestingModule
        ],
      declarations: [ SpeakerListComponent ],
      providers: [
        SpyHelper.provideClass(SpeakersService),
      ],
      schemas: [NO_ERRORS_SCHEMA]
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeakerListComponent);
    component = fixture.componentInstance;
    speakersService = TestBed.inject(SpeakersService) as SpyHelper.SpyObj<SpeakersService>;
    speakersService.getSpeakers.and.returnValue(of([]));
    router = TestBed.inject(Router);
    routerNavigateSpy = spyOn(router, 'navigate').and.callFake((arg1: string[]) => ({} as any));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('ngOnit', () => {
    component.ngOnInit();
    expect(speakersService.getSpeakers).toHaveBeenCalled();
  });

  it('should increase pageNo', () => {
    component.pageNo = 1;
    component.loadMore();
    expect(component.pageNo).toEqual(2);
  });

  it('should navigate to detail page', () => {
    component.pageNo = 1;
    component.showDetails({id: 1, name: 'test'} as unknown as ISpeaker );
    expect(routerNavigateSpy).toHaveBeenCalled();
  });

});
