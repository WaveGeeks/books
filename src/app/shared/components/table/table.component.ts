import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../../services/book/book.types';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  displayedColumns = ['title', 'author', 'publicationDate'];

  @Input() data: Observable<Book[]> = of([]);

  constructor() { }

  ngOnInit(): void {
  }

}
