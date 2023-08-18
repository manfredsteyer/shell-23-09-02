import { Component } from '@angular/core';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
    selector: 'ag-Switch',
    templateUrl: './ag-switch.component.html',
    styleUrls: ['./ag-switch.component.scss'],
})
export class AgSwitchComponent {
    params: ICellRendererParams;
    isSwitchOn = false;

    agInit(params: any): void {
        this.params = params;
        if (this.params.data.appointmentDates.length > 0) {
            this.isSwitchOn = true;
        }
    }

    agSwitchChanged() {
        this.isSwitchOn = !this.isSwitchOn;
        this.params.data.isSwitchOn = this.isSwitchOn;
        this.params.context.componentParent.switchChanged(this.params.data);
    }

    // gets called whenever the cell refreshes
    refresh(params: ICellRendererParams) {
        this.params = params;
        return true;
    }
}
