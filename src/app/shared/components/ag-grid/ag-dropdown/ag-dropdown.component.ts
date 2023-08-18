import { Component } from '@angular/core';
import { ICellRendererParams } from 'ag-grid-community';

//import { IDropdownItemModel } from '@carbonate/carbonate.interfaces';

@Component({
  selector: 'ag-dropdown',
  templateUrl: './ag-dropdown.component.html',
  styleUrls: ['./ag-dropdown.component.scss'],
})
export class AgDropdownComponent {
  params: ICellRendererParams;
  //dropdownItems: IDropdownItemModel[] = [
  //  { name: 'Hand Inc' },
  //  { name: 'Bergnaum-Schinner' },
  //  { name: 'Becker Inc' },
  //  { name: 'Skiles-Gutkowski' },
  //  { name: 'Gislason-Gislason' },
  //  { name: 'Ortiz-Ortiz' },
  //  { name: "Bogisich-O'Hara" },
  //  { name: 'Schoen-Reynolds' },
  //  { name: 'Frami-Gleichner' },
  //  { name: 'Stamm and Sons' },
  //  { name: 'Cartwright-Boyle' },
  //];

  agInit(params: any): void {
    this.params = params;
  }

  agOnItemSelected(e: CustomEvent) {
    //this.params.data.dropdownItems = this.dropdownItems;
    this.params.context.componentParent.onItemSelected(this.params.data);
  }

  // gets called whenever the cell refreshes
  refresh(params: ICellRendererParams) {
    this.params = params;
    return true;
  }
}
