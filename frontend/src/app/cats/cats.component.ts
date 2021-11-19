import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse }
  from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { Cat } from '../../../../shared/types';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.scss']
})
export class CatsComponent implements OnInit {
  cats: Cat[] | null = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getCats().subscribe((resp: HttpResponse<Cat[]>) => {
      this.cats = resp.body;
    });
  }

  private getCats(): Observable<HttpResponse<Cat[]>> {
    return this.http.get<Cat[]>(environment.apiUrl + 'cats', {
      observe: 'response'
    })
      .pipe(
        retry(3),
        catchError(this.handleError)
      );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() =>
      new Error('Something bad happened; please try again later.'));
  };
}
