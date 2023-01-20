import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RestService } from '@core/http/rest.service';
import { ISpeakers } from '@interfaces/speakers';
import { of } from 'rxjs';

import { SpeakersService } from './speakers.service';

describe('SpeakersService', () => {
  let speakersService: SpeakersService;
  let restService: RestService;
  let restServiceSpy: jasmine.Spy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        SpeakersService,
        RestService
      ]
    });
  });

  beforeEach(() => {
    speakersService = TestBed.inject(SpeakersService);
    restService = TestBed.inject(RestService);
    restServiceSpy = spyOn(restService, 'get').and.returnValue(of({ results: {id: 1} } as unknown as ISpeakers));
  });

  it('should be created', () => {
    expect(speakersService).toBeTruthy();
  });

  it('should getSpeakers', () => {
    speakersService.getSpeakers('test');
    expect(restServiceSpy).toHaveBeenCalled();
  });

});
