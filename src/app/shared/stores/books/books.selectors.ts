import { createSelector } from '@ngrx/store';
import { booksAdapter } from './books.state';

const { selectAll } = booksAdapter.getSelectors();

export const selectBooks = createSelector(selectAll, (books) => books);
