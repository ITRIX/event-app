import { Inject, Injectable, InjectionToken } from '@angular/core';
import {Base64} from 'js-base64';
export const SESSION_STORAGE = new InjectionToken<Storage>('Browser Storage', {
    providedIn: 'root',
    factory: () => sessionStorage
});
/**
 * Session storage service
 * @export
 * @class SessionStorageService
 */
@Injectable({
    providedIn: 'root'
})
export class SessionStorageService {
    /**
     * Creates an instance of SessionStorageService.
     * @param {Storage} storage
     * @memberof SessionStorageService
     */
    constructor(@Inject(SESSION_STORAGE) public storage: Storage) { }
    /**
     * Gets item
     * @param {string} key
     * @returns {Object}
     * @memberof SessionStorageService
     */
    getItem(key: string): Object {
        key = Base64.encode(key);
        let item: string | Object = this.storage.getItem(key);
        if (!!item) {
          try {
            item = JSON.parse(Base64.decode(item as string)) as Object;
          } catch {
            item = undefined;
            this.storage.removeItem(key);
          }
        }
        return item;
    }
    /**
     * Sets item
     * @param {string} key
     * @param {Object} value
     * @memberof SessionStorageService
     */
    setItem(key: string, value: Object) {
        this.storage.setItem(Base64.encode(key), Base64.encode(JSON.stringify(value)));
    }
    /**
     * Items exists
     * @param {string} key
     * @returns {boolean}
     * @memberof SessionStorageService
     */
    itemExists(key: string): boolean {
        return !!this.getItem(key);
    }
    /**
     * Clears items
     * @memberof SessionStorageService
     */
    clearItems() {
        this.storage.clear();
    }

}
