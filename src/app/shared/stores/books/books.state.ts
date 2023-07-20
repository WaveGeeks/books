import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { Book } from '../../services/book/book.types';

export interface BooksComponentState extends EntityState<Book> {
  loading: boolean;
  error?: string;
}

export const booksAdapter = createEntityAdapter<Book>();
export const initialState = booksAdapter.getInitialState({ loading: true });
