import { HttpHeaders, HttpParams } from '@angular/common/http';

/**
 * Ihttpoptions
 * @export
 * @interface IHttpOptions
 */
export interface IHttpOptions {
    /**
     * 
     * @type {(HttpHeaders | {
     *         [header: string]: string | string[];
     *     })}
     * @memberof IHttpOptions
     */
    headers?: HttpHeaders | {
        [header: string]: string | string[];
    };
    /**
     * 
     * @type {(HttpParams | {
     *         [param: string]: string | string[];
     *     })}
     * @memberof IHttpOptions
     */
    params?: HttpParams | {
        [param: string]: string | string[];
    };
    /**
     * 
     * @type {'json'}
     * @memberof IHttpOptions
     */
    responseType?: 'json';
}