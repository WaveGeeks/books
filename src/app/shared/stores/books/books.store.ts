import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { BooksComponentState, booksAdapter, initialState } from './books.state';
import { Book } from '../../services/book/book.types';
import { Update } from '@ngrx/entity';
import { selectBooks } from './books.selectors';
import { BookService } from '../../services/book/book.service';
import { map, tap } from 'rxjs';

@Injectable()
export class BooksComponentStore extends ComponentStore<BooksComponentState> {
  books$ = this.select(state => selectBooks(state));

  constructor(private bookService: BookService) {
    super(initialState);
  }

  readonly add = this.updater((state, book: Book) => {
    return booksAdapter.addOne({
      ...book,
      id: Math.floor(Math.random() * 1000),
    }, state);
  });

  readonly update = this.updater((state, update: Update<Book>) => {
    return booksAdapter.updateOne(update, state);
  });

  readonly setAll = this.updater((state, books: Book[]) => {
    return booksAdapter.setAll(books, state);
  })

  readonly setError = this.updater((state, error: any) => {
    return {
      ...state,
      error: error
    }
  })

  readonly init = this.effect(() => this.bookService.get().pipe(
    tap({
      next: (books: Book[]) => this.setAll(books),
      error: (e) => this.setError(e)
    })
  ))
}
