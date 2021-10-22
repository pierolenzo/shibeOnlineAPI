import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry, tap } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataRetriveService {
  private readonly dataUrl!: string;

  constructor(private httpClient: HttpClient) {
    this.dataUrl = '/api';

   }

  /**
   * getData Preleva i dati da shibe.online
   *
   * @param {string} typeAnimal - URI You can also get pictures of cats at /api/cats or birds at /api/birds.
   * @param {string} numberPhoto - The number of images to be returned. Default is 1
   * @param {string} urls - Should the API return URLs or filenames without extensions? URLs are the default.
   * @param {string} https - Should the URLs be HTTPS or HTTP? They're HTTPS by default now.
   *
   */
  public getData(typeAnimal: string = 'cats',
                 numberPhoto: string = '1',
                 urls: string = 'true',
                 https: string = 'true'): Observable<string[]> {

    const url = `${this.dataUrl}/${typeAnimal}?count=${numberPhoto}&urls=${urls}&httpsUrls=${https}`
    return this.httpClient.get<string[]>(url).pipe(
      tap(d => console.log('getData from data-retrive.service', d)),
      retry(3),
      catchError(this.handleError)
    );
  }

  /**
   * handleError
   */
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
