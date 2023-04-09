import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { TableData } from './model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnChanges {

  @Input()
  tableData!: TableData;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['tableData']) {
      this.tableData = this.tableData;
    }
  }
}
