import {NgModule} from '@angular/core';

import {NgxEchartsModule} from 'ngx-echarts';

import {ThemeModule} from '../../@theme/theme.module';
import {DuplicateLogoDetectorComponent} from "./duplicate-logo-detector-component";
import {Ng2SmartTableModule} from "ng2-smart-table";
import {MatCardModule} from "@angular/material";



@NgModule({
  imports: [
    ThemeModule,
    NgxEchartsModule,
    Ng2SmartTableModule,
    MatCardModule,
  ],
  declarations: [
    DuplicateLogoDetectorComponent,
  ],
})
export class DuplicateLogoDetectorModule {
}
