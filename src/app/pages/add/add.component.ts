import { pageKeys } from './../../app-routing.module';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Book } from 'src/app/shared/services/book/book.types';
import { BooksComponentStore } from 'src/app/shared/stores/books/books.store';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  constructor(
    private store: BooksComponentStore,
    private router: Router) { }

  form = new FormGroup({
    book: new FormGroup({
      title: new FormControl<string | null>(null, [Validators.required]),
      author: new FormControl<string | null>(null, [Validators.required]),
      publicationDate: new FormControl<Date | null>(null, [Validators.required])
    })
  });

  ngOnInit(): void {
  }

  onSubmit(event: Event) {
    event.stopImmediatePropagation();
    event.preventDefault();

    this.store.add(this.form.getRawValue().book as Book);
    this.router.navigate([pageKeys.Overview]);
  }
}
