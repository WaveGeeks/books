import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpClient: HttpClient) { }

  get() {
    return this.httpClient.get<any>('api/book').pipe(
      map(response => response.data.map((book: any) => ({
        ...book,
        publicationDate: new Date(book.publicationDate)
      })))
    );
  }
}
