import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RestService } from '@core/http/rest.service';
import { of } from 'rxjs';

describe('RestService', () => {
    let restService: RestService;
    let httpClient: HttpClient;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule
            ],
            providers: [
                RestService,
                HttpClient
            ]
        });
    });

    beforeEach(() => {
        restService = TestBed.inject(RestService);
        httpClient = TestBed.inject(HttpClient);
        spyOn(httpClient, 'get').and.returnValue(of({}));
        spyOn(httpClient, 'put').and.returnValue(of({}));
        spyOn(httpClient, 'post').and.returnValue(of({}));
        spyOn(httpClient, 'delete').and.returnValue(of({}));
    });

    it('should be created', () => {
        expect(restService).toBeTruthy();
    });

    it('should call get', () => {
        restService.get('test');
        expect(httpClient.get).toHaveBeenCalled();
    });

    it('should call put', () => {
        restService.put('test', {});
        expect(httpClient.put).toHaveBeenCalled();
    });

    it('should call post', () => {
        restService.post('post', {});
        expect(httpClient.post).toHaveBeenCalled();
    });

    it('should call delete', () => {
        restService.delete('test');
        expect(httpClient.delete).toHaveBeenCalled();
    });

});
