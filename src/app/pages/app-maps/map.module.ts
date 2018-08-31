import {NgModule} from '@angular/core';
import {ThemeModule} from '../../@theme/theme.module';
import {MapComponent} from "./map-component";
import {NgxGoogleMapModule} from "ngx-google-map";


@NgModule({
  imports: [
    ThemeModule,
    NgxGoogleMapModule,
  ],
  declarations: [
    MapComponent,
  ],
})
export class MapModule {
}
