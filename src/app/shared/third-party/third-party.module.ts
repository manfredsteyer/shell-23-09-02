import { NgModule } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { LicenseManager } from 'ag-grid-enterprise';

const MODULES: any[] = [];

@NgModule({
  providers: [],
  declarations: [],
  imports: [...MODULES, AgGridModule],
  exports: [...MODULES, AgGridModule],
})
export class ThirdPartyModule {
  constructor() {
    LicenseManager.setLicenseKey(
      'Using_this_AG_Grid_Enterprise_key_( AG-045864 )_in_excess_of_the_licence_granted_is_not_permitted___Please_report_misuse_to_( legal@ag-grid.com )___For_help_with_changing_this_key_please_contact_( info@ag-grid.com )___( Signify Health, LLC )_is_granted_a_( Multiple Applications )_Developer_License_for_( 2 )_Front-End_JavaScript_developers___All_Front-End_JavaScript_developers_need_to_be_licensed_in_addition_to_the_ones_working_with_AG_Grid_Enterprise___This_key_has_not_been_granted_a_Deployment_License_Add-on___This_key_works_with_AG_Grid_Enterprise_versions_released_before_( 22 October 2024 )____[v2]_MTcyOTU1MTYwMDAwMA==923c7c82544b2cf8ab966ed342fa9ddc'
    );
  }
}
