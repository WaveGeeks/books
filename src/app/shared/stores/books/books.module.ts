import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponentStore } from './books.store';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [BooksComponentStore],
  exports: [],
})
export class BooksModule { }
