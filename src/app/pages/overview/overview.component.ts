import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { pageKeys } from 'src/app/app-routing.module';
import { BooksComponentStore } from 'src/app/shared/stores/books/books.store';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit, OnDestroy {
  private unsubscribe$: Subject<any> = new Subject<any>();
  title = 'books';

  books$ = this.store.books$.pipe(takeUntil(this.unsubscribe$));

  constructor(
    private store: BooksComponentStore,
    private router: Router,
    ) { }

  ngOnInit(): void {
    this.store.init();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next(undefined);
    this.unsubscribe$.complete();
  }

  onAdd(event: Event) {
    event.stopImmediatePropagation();
    event.preventDefault();

    this.router.navigate([pageKeys.Add])
  }
}
