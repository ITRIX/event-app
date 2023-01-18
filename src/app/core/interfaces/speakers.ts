/**
 * Ispeakers
 * @export
 * @interface ISpeakers
 */
export interface ISpeakers {
    /**
     * 
     * @type {ISpeaker[]}
     * @memberof ISpeakers
     */
    results: ISpeaker[];
}

/**
 * Iname
 * @export
 * @interface IName
 */
export interface IName {
    /**
     * 
     * @type {string}
     * @memberof IName
     */
    title: string;
    /**
     * 
     * @type {string}
     * @memberof IName
     */
    first: string;
    /**
     * 
     * @type {string}
     * @memberof IName
     */
    last: string;
}

/**
 * Istreet
 * @export
 * @interface IStreet
 */
export interface IStreet {
    /**
     * 
     * @type {number}
     * @memberof IStreet
     */
    number: number;
    /**
     * 
     * @type {string}
     * @memberof IStreet
     */
    name: string;
}

/**
 * Ilocation
 * @export
 * @interface ILocation
 */
export interface ILocation {
    /**
     * 
     * @type {IStreet}
     * @memberof ILocation
     */
    street: IStreet;
    /**
     * 
     * @type {string}
     * @memberof ILocation
     */
    city: string;
    /**
     * 
     * @type {string}
     * @memberof ILocation
     */
    state: string;
    /**
     * 
     * @type {string}
     * @memberof ILocation
     */
    country: string;
    /**
     * 
     * @type {number}
     * @memberof ILocation
     */
    postcode: number;
}

/**
 * Ilogin
 * @export
 * @interface ILogin
 */
export interface ILogin {
    /**
     * 
     * @type {string}
     * @memberof ILogin
     */
    uuid: string;
    /**
     * 
     * @type {string}
     * @memberof ILogin
     */
    username: string;
    /**
     * 
     * @type {string}
     * @memberof ILogin
     */
    password: string;
}

/**
 * Idob
 * @export
 * @interface IDob
 */
export interface IDob {
    /**
     * 
     * @type {Date}
     * @memberof IDob
     */
    date: Date;
    /**
     * 
     * @type {number}
     * @memberof IDob
     */
    age: number;
}

/**
 * Iid
 * @export
 * @interface IId
 */
export interface IId {
    /**
     * 
     * @type {string}
     * @memberof IId
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof IId
     */
    value: string;
}

/**
 * Ipicture
 * @export
 * @interface IPicture
 */
export interface IPicture {
    /**
     * 
     * @type {string}
     * @memberof IPicture
     */
    large: string;
    /**
     * 
     * @type {string}
     * @memberof IPicture
     */
    medium: string;
    /**
     * 
     * @type {string}
     * @memberof IPicture
     */
    thumbnail: string;
}

/**
 * Ispeaker
 * @export
 * @interface ISpeaker
 */
export interface ISpeaker {
    /**
     * 
     * @type {string}
     * @memberof ISpeaker
     */
    gender: string;
    /**
     * 
     * @type {IName}
     * @memberof ISpeaker
     */
    name: IName;
    /**
     * 
     * @type {ILocation}
     * @memberof ISpeaker
     */
    location: ILocation;
    /**
     * 
     * @type {string}
     * @memberof ISpeaker
     */
    email: string;
    /**
     * 
     * @type {ILogin}
     * @memberof ISpeaker
     */
    login: ILogin;
    /**
     * 
     * @type {IDob}
     * @memberof ISpeaker
     */
    dob: IDob;
    /**
     * 
     * @type {string}
     * @memberof ISpeaker
     */
    phone: string;
    /**
     * 
     * @type {IId}
     * @memberof ISpeaker
     */
    id: IId;
    /**
     * 
     * @type {IPicture}
     * @memberof ISpeaker
     */
    picture: IPicture;
}

