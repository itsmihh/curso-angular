import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Moment } from '../Moment';

// import { environment } from '../../environments/environment';
import { environment } from '../../environments/environment.development';
import { Response } from '../Response';

@Injectable({
  providedIn: 'root'
})
export class MemoService {
  private baseApiUrl = environment.baseApiUrl
  private apiUrl = `${this.baseApiUrl}api/memo-gallery`

  constructor(private http: HttpClient) { }

  getMemos(): Observable<Response<Moment[]>> {
    return this.http.get<Response<Moment[]>>(this.apiUrl);
  }

  getMemo(id: number):Observable<Response<Moment>> {
    const url = `${this.apiUrl}/${id}`
    return this.http.get<Response<Moment>>(url)
   }

  createMemo(formData: FormData): Observable<FormData> {
    console.log('Chamando POST para:', this.apiUrl);
    return this.http.post<FormData>(this.apiUrl, formData);
  }

  removeMemo(id: number) {
    const url = `${this.apiUrl}/${id}`
    return this.http.delete(url)
  }

  updateMemo(id: number, formData: FormData): Observable<FormData> {
    const url = `${this.apiUrl}/${id}`
    return this.http.put<FormData>(url, formData)
  }
 }

