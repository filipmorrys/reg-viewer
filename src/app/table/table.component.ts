import { Component, ElementRef, Input, OnChanges, Renderer2, SimpleChanges, ViewChild } from '@angular/core';
import { HeaderEntry, TableData } from './model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnChanges {

  colStyles: string[] = [];

  @ViewChild('hiddenPanel')
  hiddenPanel!: ElementRef;

  @Input()
  tableData!: TableData;

  hiddenPanelVisible = false;

  constructor(private renderer: Renderer2) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['tableData']) {
      this.tableData = this.tableData;
    }

    this.tableData.headers.forEach(h => this.colStyles.push('table-cell'));  
  }

  openPanel(): void {
    this.renderer.setStyle(this.hiddenPanel.nativeElement, 'visibility', 'visible');
  }

  closePanel(): void {
    this.renderer.setStyle(this.hiddenPanel.nativeElement, 'visibility', 'hidden');
  }

  checkChange(ev: any, header: HeaderEntry) {
    if (ev.target && ev.target.checked) {
      this.colStyles[header.index] = 'none';
    } else {
      console.log("unchecked");
      this.colStyles[header.index] = 'table-cell';
    }
  }

}
