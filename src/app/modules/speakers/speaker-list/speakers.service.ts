import { Injectable } from '@angular/core';
import { RestService } from '@core/http/rest.service';
import { environment } from '@env';
import { ISpeaker, ISpeakers } from '@interfaces/speakers';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';

/**
 * Injectable
 * @export
 * @class SpeakersService
 */
@Injectable({
  providedIn: 'root'
})
export class SpeakersService {
  /**
   * Api base path of speakers service
   * @private
   * @memberof SpeakersService
   */
  private readonly _apiBasePath = environment.apiBasePath;
  /**
   * Creates an instance of SpeakersService.
   * @param {RestService} restService
   * @memberof SpeakersService
   */
  constructor(private restService: RestService) { }
  /**
   * Gets speakers
   * @param {string} query
   * @returns {Observable<ISpeaker[]>}
   * @memberof SpeakersService
   */
  getSpeakers(query: string): Observable<ISpeaker[]> {
    return this.restService.get<ISpeakers>(`${this._apiBasePath}${query}`).pipe(
      take(1),
      map((res: ISpeakers) => res.results)
    );
  }
}
