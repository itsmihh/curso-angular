import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Moment } from '../Moment';

// import { environment } from '../../environments/environment';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class MemoService {
  private baseApiUrl = environment.baseApiUrl
  private apiUrl = `${this.baseApiUrl}api/memo-gallery`

  constructor(private http: HttpClient) { }

  createMemo(formData: FormData): Observable<FormData> {
    console.log('Chamando POST para:', this.apiUrl);
    return this.http.post<FormData>(this.apiUrl, formData);
  }
 }
