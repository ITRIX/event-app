import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HTTPOptions } from '@models/http-options';

/**
 * Injectable
 * @export
 * @class RestService
 */
@Injectable({ providedIn: 'root' })
export class RestService {
    /**
     * Creates an instance of RestService.
     * @param {HttpClient} http
     * @memberof RestService
     */
    constructor(private http: HttpClient) { }
    /**
     * T rest service
     * @template T
     * @param {string} url
     * @param {HTTPOptions} [options]
     * @returns {Observable<T>}
     * @memberof RestService
     */
    get<T>(url: string, options?: HTTPOptions): Observable<T> {
        return this.http.get<T>(url, options);
    }
    /**
     * Puts rest service
     * @template T
     * @param {string} url
     * @param {(any | null)} body
     * @param {HTTPOptions} [options]
     * @returns {Observable<T>}
     * @memberof RestService
     */
    put<T>(url: string, body: any | null, options?: HTTPOptions): Observable<T> {
        return this.http.put<T>(url, body, options);
    }
    /**
     * Posts rest service
     * @template T
     * @param {string} url
     * @param {(any | null)} body
     * @param {HTTPOptions} [options]
     * @returns {Observable<T>}
     * @memberof RestService
     */
    post<T>(url: string, body: any | null, options?: HTTPOptions): Observable<T> {
        return this.http.post<T>(url, body, options);
    }
    /**
     * Deletes rest service
     * @template T
     * @param {string} url
     * @param {HTTPOptions} [options]
     * @returns {Observable<T>}
     * @memberof RestService
     */
    delete<T>(url: string, options?: HTTPOptions): Observable<T> {
        return this.http.delete<T>(url, options);
    }
}
