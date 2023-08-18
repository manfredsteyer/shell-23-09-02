import { Component } from '@angular/core';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'ag-tag',
  templateUrl: './ag-tag.component.html',
  styleUrls: ['./ag-tag.component.scss'],
})
export class AgTagComponent {
  params: ICellRendererParams;
  tagText = '';
  tagClass = '';

  agInit(params: any): void {
    this.params = params;
    console.log('params', params);
    this.agSetTag();
  }

  agSetTag() {
    switch (this.params.data.gender) {
      case 1: {
        this.tagText = 'Male';
        this.tagClass = 'male';
        break;
      }
      case 2: {
        this.tagText = 'Female';
        this.tagClass = 'female';
        break;
      }
      default: {
        this.tagText = 'Not Specified';
        this.tagClass = 'not-specified';
        break;
      }
    }
  }
  // gets called whenever the cell refreshes
  refresh(params: ICellRendererParams) {
    this.params = params;
    return true;
  }
}
