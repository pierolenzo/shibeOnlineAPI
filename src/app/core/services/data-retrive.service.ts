import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataRetriveService {

  constructor(private httpClient: HttpClient) { }

  getData(): Observable<string[]> {
    return this.httpClient
      .get<string[]>('/api/shibes?count=5&urls=true&httpsUrls=true')
      .pipe(
        tap((data) => console.log(data)),
        retry(3),
        catchError(this.handleError)
      );
  }

    private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}
        body was: ${error.error}`
      );
    }

    return throwError('Something bad happen; please try again later.');
  }

}
