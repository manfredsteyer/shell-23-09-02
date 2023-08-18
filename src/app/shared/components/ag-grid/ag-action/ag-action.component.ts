import { Component } from '@angular/core';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
    selector: 'ag-action',
    templateUrl: './ag-action.component.html',
    styleUrls: ['./ag-action.component.scss'],
})
export class AgActionComponent {
    params: ICellRendererParams;
    buttonAction = 'Action';

    agInit(params: any): void {
        this.params = params;
    }

    agClickAction() {
        this.params.context.componentParent.clickAction(this.params.data);
    }

    // gets called whenever the cell refreshes
    refresh(params: ICellRendererParams) {
        this.params = params;
        return true;
    }
}
