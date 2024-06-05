//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v14.0.7.0 (NJsonSchema v11.0.0.0 (Newtonsoft.Json v13.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------

/* tslint:disable */
/* eslint-disable */
// ReSharper disable InconsistentNaming

import { mergeMap as _observableMergeMap, catchError as _observableCatch } from 'rxjs/operators';
import { Observable, throwError as _observableThrow, of as _observableOf } from 'rxjs';
import { Injectable, Inject, Optional, InjectionToken } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpResponseBase } from '@angular/common/http';

export const API_BASE_URL = new InjectionToken<string>('API_BASE_URL');

export interface IStatisticsClient {
    getBalanceStatuses(): Observable<BalanceStatusVM[]>;
    getBiggestDebtorCreditor(): Observable<BiggestDebtorCreditorVM>;
    getAverageDebts(): Observable<AverageDebtVM[]>;
    getBestDebtor(): Observable<BestDebtorVM>;
}

@Injectable({
    providedIn: 'root'
})
export class StatisticsClient implements IStatisticsClient {
    private http: HttpClient;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(HttpClient) http: HttpClient, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        this.http = http;
        this.baseUrl = baseUrl ?? "";
    }

    getBalanceStatuses(): Observable<BalanceStatusVM[]> {
        let url_ = this.baseUrl + "/api/Statistics/GetBalanceStatuses";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "application/json"
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processGetBalanceStatuses(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processGetBalanceStatuses(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<BalanceStatusVM[]>;
                }
            } else
                return _observableThrow(response_) as any as Observable<BalanceStatusVM[]>;
        }));
    }

    protected processGetBalanceStatuses(response: HttpResponseBase): Observable<BalanceStatusVM[]> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (Array.isArray(resultData200)) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(BalanceStatusVM.fromJS(item));
            }
            else {
                result200 = <any>null;
            }
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf(null as any);
    }

    getBiggestDebtorCreditor(): Observable<BiggestDebtorCreditorVM> {
        let url_ = this.baseUrl + "/api/Statistics/GetBiggestDebtorCreditor";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "application/json"
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processGetBiggestDebtorCreditor(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processGetBiggestDebtorCreditor(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<BiggestDebtorCreditorVM>;
                }
            } else
                return _observableThrow(response_) as any as Observable<BiggestDebtorCreditorVM>;
        }));
    }

    protected processGetBiggestDebtorCreditor(response: HttpResponseBase): Observable<BiggestDebtorCreditorVM> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = BiggestDebtorCreditorVM.fromJS(resultData200);
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf(null as any);
    }

    getAverageDebts(): Observable<AverageDebtVM[]> {
        let url_ = this.baseUrl + "/api/Statistics/GetAverageDebts";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "application/json"
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processGetAverageDebts(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processGetAverageDebts(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<AverageDebtVM[]>;
                }
            } else
                return _observableThrow(response_) as any as Observable<AverageDebtVM[]>;
        }));
    }

    protected processGetAverageDebts(response: HttpResponseBase): Observable<AverageDebtVM[]> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (Array.isArray(resultData200)) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(AverageDebtVM.fromJS(item));
            }
            else {
                result200 = <any>null;
            }
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf(null as any);
    }

    getBestDebtor(): Observable<BestDebtorVM> {
        let url_ = this.baseUrl + "/api/Statistics/GetBestDebtor";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "application/json"
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processGetBestDebtor(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processGetBestDebtor(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<BestDebtorVM>;
                }
            } else
                return _observableThrow(response_) as any as Observable<BestDebtorVM>;
        }));
    }

    protected processGetBestDebtor(response: HttpResponseBase): Observable<BestDebtorVM> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = BestDebtorVM.fromJS(resultData200);
            return _observableOf(result200);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf(null as any);
    }
}

export class BalanceStatusVM implements IBalanceStatusVM {
    personId!: string;
    firstName!: string;
    lastName!: string;
    balanceStatus!: BalanceStatus;

    constructor(data?: IBalanceStatusVM) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.personId = _data["personId"];
            this.firstName = _data["firstName"];
            this.lastName = _data["lastName"];
            this.balanceStatus = _data["balanceStatus"];
        }
    }

    static fromJS(data: any): BalanceStatusVM {
        data = typeof data === 'object' ? data : {};
        let result = new BalanceStatusVM();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["personId"] = this.personId;
        data["firstName"] = this.firstName;
        data["lastName"] = this.lastName;
        data["balanceStatus"] = this.balanceStatus;
        return data;
    }
}

export interface IBalanceStatusVM {
    personId: string;
    firstName: string;
    lastName: string;
    balanceStatus: BalanceStatus;
}

export enum BalanceStatus {
    Negative = 0,
    Neutral = 1,
    Positive = 2,
}

export class BiggestDebtorCreditorVM implements IBiggestDebtorCreditorVM {
    personId!: string;
    firstName!: string;
    lastName!: string;
    totalDebt!: number;
    totalCredit!: number;

    constructor(data?: IBiggestDebtorCreditorVM) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.personId = _data["personId"];
            this.firstName = _data["firstName"];
            this.lastName = _data["lastName"];
            this.totalDebt = _data["totalDebt"];
            this.totalCredit = _data["totalCredit"];
        }
    }

    static fromJS(data: any): BiggestDebtorCreditorVM {
        data = typeof data === 'object' ? data : {};
        let result = new BiggestDebtorCreditorVM();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["personId"] = this.personId;
        data["firstName"] = this.firstName;
        data["lastName"] = this.lastName;
        data["totalDebt"] = this.totalDebt;
        data["totalCredit"] = this.totalCredit;
        return data;
    }
}

export interface IBiggestDebtorCreditorVM {
    personId: string;
    firstName: string;
    lastName: string;
    totalDebt: number;
    totalCredit: number;
}

export class AverageDebtVM implements IAverageDebtVM {
    personId!: string;
    firstName!: string;
    lastName!: string;
    averageDebt!: number;

    constructor(data?: IAverageDebtVM) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.personId = _data["personId"];
            this.firstName = _data["firstName"];
            this.lastName = _data["lastName"];
            this.averageDebt = _data["averageDebt"];
        }
    }

    static fromJS(data: any): AverageDebtVM {
        data = typeof data === 'object' ? data : {};
        let result = new AverageDebtVM();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["personId"] = this.personId;
        data["firstName"] = this.firstName;
        data["lastName"] = this.lastName;
        data["averageDebt"] = this.averageDebt;
        return data;
    }
}

export interface IAverageDebtVM {
    personId: string;
    firstName: string;
    lastName: string;
    averageDebt: number;
}

export class BestDebtorVM implements IBestDebtorVM {
    personId!: string;
    firstName!: string;
    lastName!: string;
    refundedRelative!: number;
    totalDebtAmount!: number;

    constructor(data?: IBestDebtorVM) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.personId = _data["personId"];
            this.firstName = _data["firstName"];
            this.lastName = _data["lastName"];
            this.refundedRelative = _data["refundedRelative"];
            this.totalDebtAmount = _data["totalDebtAmount"];
        }
    }

    static fromJS(data: any): BestDebtorVM {
        data = typeof data === 'object' ? data : {};
        let result = new BestDebtorVM();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["personId"] = this.personId;
        data["firstName"] = this.firstName;
        data["lastName"] = this.lastName;
        data["refundedRelative"] = this.refundedRelative;
        data["totalDebtAmount"] = this.totalDebtAmount;
        return data;
    }
}

export interface IBestDebtorVM {
    personId: string;
    firstName: string;
    lastName: string;
    refundedRelative: number;
    totalDebtAmount: number;
}

export class SwaggerException extends Error {
    override message: string;
    status: number;
    response: string;
    headers: { [key: string]: any; };
    result: any;

    constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
        super();

        this.message = message;
        this.status = status;
        this.response = response;
        this.headers = headers;
        this.result = result;
    }

    protected isSwaggerException = true;

    static isSwaggerException(obj: any): obj is SwaggerException {
        return obj.isSwaggerException === true;
    }
}

function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): Observable<any> {
    if (result !== null && result !== undefined)
        return _observableThrow(result);
    else
        return _observableThrow(new SwaggerException(message, status, response, headers, null));
}

function blobToText(blob: any): Observable<string> {
    return new Observable<string>((observer: any) => {
        if (!blob) {
            observer.next("");
            observer.complete();
        } else {
            let reader = new FileReader();
            reader.onload = event => {
                observer.next((event.target as any).result);
                observer.complete();
            };
            reader.readAsText(blob);
        }
    });
}