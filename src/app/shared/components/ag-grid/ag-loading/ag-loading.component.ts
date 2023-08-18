import { Component } from '@angular/core';
import { ILoadingOverlayAngularComp } from 'ag-grid-angular';

@Component({
    selector: 'ag-loading',
    templateUrl: './ag-loading.component.html',
    styleUrls: ['./ag-loading.component.scss'],
})
export class AgLoadingComponent implements ILoadingOverlayAngularComp {
    agInit(): void {}
}
