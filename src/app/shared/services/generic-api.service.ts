import { throwError as observableThrowError, Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { catchError, map } from 'rxjs/operators';
import Utils from '../utils/utils';
import { HttpParams } from '@angular/common/http';
import {AppConfig} from '@app/app.config';

@Injectable()
export class GenericApiService<TData> {
  protected baseUrl: string;
  protected http: HttpService;

  constructor(resourceName: string, http: HttpService, private appConfig: AppConfig) {
    this.baseUrl =  `${this.appConfig.apiUrl}/${resourceName}`;
    this.http = http;
  }

  getAll(params?: any): Observable<TData[]> {
    return this.http.get(this.baseUrl, params)
      .pipe(
        map((response) => this.extractDataList(response)),
        catchError((error) => this.handleError(error))
      );
  }

  getById(id: number): Observable<TData> {
    return this.http.get(`${this.baseUrl}/${id}`)
      .pipe(
        map((response) => this.extractData(response)),
        catchError((error) => this.handleError(error))
      );
  }

  getCustom<customType>(): Observable<customType> {
    // todo: determine if we want to use built in?
    //return this.http.get<responseType>(`${this.baseUrl}`)
    return this.http.get<customType>(`${this.baseUrl}`)
      .pipe(
        map((response) => this.extractCustomData<customType>(response)),
        catchError((error) => this.handleError(error))
      );
  }

  getCustomList<customType>(): Observable<customType[]> {
    return this.http.get<customType>(`${this.baseUrl}`)
      .pipe(
        map((response) => this.extractCustomDataList<customType>(response)),
        catchError((error) => this.handleError(error))
      );
  }

  create(item: TData): Observable<TData> {
    return this.http.post(`${this.baseUrl}`, item)
      .pipe(
        map((response) => this.extractData(response)),
        catchError((error) => this.handleError(error))
      );
  }

  update(id: string, item: TData): Observable<TData> {
    return this.http.put(`${this.baseUrl}/${id}`, item)
      .pipe(
        map((response) => this.extractData(response)),
        catchError((error) => this.handleError(error))
      );
  }

  delete(id: string) {
    return this.http.delete(`${this.baseUrl}/${id}`)
      .pipe(
        catchError((error) => this.handleError(error))
      );
  }

  extractData(response: any, returnApiResponse: boolean = false): TData {
    const createModelFunc = this['createModel'];

    const item = this.convertJsonToModel<TData>(response, createModelFunc);

    return item;
  }

  extractDataList(response: any): TData[] {
    const createModelFunc = this['createModel'];

    const items = this.convertJsonToModelArray<TData[]>(response, createModelFunc);

    return items;
  }

  extractCustomData<customType>(response: any): customType {
    const item = this.convertJsonToModel<customType>(response);
    return item;
  }

  extractCustomDataList<customType>(response: any): customType[] {
    const items = this.convertJsonToModelArray<customType[]>(response);
    return items;
  }

  extractAnyData(response: any) {
    return (response as any) || {};
  }

  extractStringData(response: any) {
    return (response as string) || '';
  }

  extractNumberData(response) {
    if (response && typeof response === 'number') {
      return response as number;
    } else {
      return 0;
    }
  }

  extractAnyResponse(response: any) {
    return (response as any) || {};
  }

  handleError(error) {
    // no handling currently
    return observableThrowError(() => error);
  }

  protected convertObjectToHttpParams(params: any) {
    let httpParams = new HttpParams();

    for (const property in params) {
      if (params.hasOwnProperty(property)) {
        httpParams = httpParams.append(property, params[property]);
      }
    }

    return httpParams;
  }

  private convertJsonToModel<dataType>(response, createModelFunc = null): dataType {
    let data;

    if (!createModelFunc && response) {
      data = (response as dataType) || {};
    }
    else if (response) {
      if (typeof response !== 'object') {
        response = Utils.tryParseJSON(response);
      }
      data = createModelFunc(response);
    }

    return data;
  }

  private convertJsonToModelArray<dataListType>(response, createModelFunc = null): dataListType {
    let dataList;

    if (!createModelFunc) {
      dataList = (response as dataListType[]) || [];
    }
    else if (response && Array.isArray(response)) {
      dataList = [];
      for (let item of response) {
        if (item) {
          if (typeof item !== 'object') {
            item = Utils.tryParseJSON(item);
          }
          dataList.push(createModelFunc(item));
        }
      }
    }

    return dataList;
  }
}
