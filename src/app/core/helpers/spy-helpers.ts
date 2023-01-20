import { Provider, Type } from '@angular/core';

/**
 * Type of SpyObj
 * @export
 * @type
 */
export type SpyObj<T> = T & { [k in keyof T]: T[k] extends Function ? T[k] & jasmine.Spy : T[k]; };
/**
 * Type of SpyOf
 * @type
 */
type SpyOf<T> = T & { [P in keyof T]: T[P] & jasmine.Spy };
/**
 * Type of SpyVars
 * @type
 */
type SpyVars<K extends string | number, V = unknown> = [K, V];
/**
 * Spys on class
 * @template T
 * @param {Type<T>} type
 * @returns {SpyOf<T>}
 */
function spyOnClass<T>(type: Type<T>): SpyOf<T> {
    const prototype = type.prototype;
    const typeClass = new type();

    const methods = Object.getOwnPropertyNames(prototype)
        .map((name) => [name, Object.getOwnPropertyDescriptor(prototype, name)])
        .filter(([_, descriptor]) => ((descriptor as PropertyDescriptor).value instanceof Function))
        .map(([name]) => name);

    const variables: SpyVars<string, any>[] = Object.getOwnPropertyNames(typeClass)
        .filter((name) => !!typeClass[name])
        .map((name) => [name, typeClass[name]]);

    const mock = jasmine.createSpyObj(type.name, [...methods, ...variables.map(v => v[0])]);

    variables.forEach(v => mock[v[0]] = v[1]);

    return mock as SpyOf<T>;
}
/**
 * Provides class
 * @export
 * @template T
 * @param {Type<T>} type
 * @returns {Provider}
 */
export function provideClass<T>(type: Type<T>): Provider {
    return {
        provide: type,
        useValue: spyOnClass(type)
    };
}
