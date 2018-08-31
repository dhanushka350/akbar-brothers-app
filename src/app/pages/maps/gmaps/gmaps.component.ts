import {Component} from '@angular/core';

@Component({
  selector: 'ngx-gmaps',
  styleUrls: ['./gmaps.component.scss'],
  template: `
    <h5 style="color: black; font-weight: bold;">World Map View</h5>
    <div class="row">
      <div class="col-sm-12 col-md-12 col-lg-12">
        <div class="row">
          <div class="input-group input-group-sm">
            <label class="col-sm-5 col-md-5 col-lg-5" style="color: black;text-align: left;">Main Brand : </label>
            <div class="col-sm-2 col-md-2 col-lg-2"></div>
            <label class="col-sm-5 col-md-5 col-lg-5" style="color: black;text-align: left;">Status : </label>
          </div>
        </div>
        <div class="row">
          <div class="input-group input-group-sm">
            <input type="text" placeholder="" class="form-control col-sm-5 col-md-5 col-lg-5" style="height: 30px;"
                   list="registry-type"/>
            <div class="col-sm-2 col-md-2 col-lg-2"></div>
            <select class="form-control col-sm-5 col-md-5 col-lg-5" style="height: 30px; cursor: pointer;">
              <option>1</option>
              <option>2</option>
            </select>
          </div>
        </div>
      </div>
    </div>
    <br>
    <div class="clearfix"></div>
    <div class="row">
      <div class="col-sm-12 col-md-12 col-lg-12">
        <nb-card>
          <nb-card-header></nb-card-header>
          <nb-card-body>
            <agm-map [latitude]="lat" [longitude]="lng">
              <agm-marker [latitude]="lat" [longitude]="lng"></agm-marker>
            </agm-map>
          </nb-card-body>
        </nb-card>
      </div>
      <div class="input-group">
        <table class="table">
          <thead>
          <tr>
            <th style="color: black;">Status</th>
            <th style="color: black;">Country</th>
          </tr>
          </thead>
          <tbody>
          <tr style="height: 10px;">
            <td style="color: black;">Registered</td>
            <td style="color: black;">country 1,country 2,country 3,country 4,country 5,country 6,country 7,country
              8,country 9
            </td>
          </tr>
          <tr style="height: 10px;">
            <td style="color: black;">Pending</td>
            <td style="color: black;">country 1,country 2,country 3,country 4,country 5,country 6,country 7,country
              8,country 9
            </td>
          </tr>
          </tbody>
        </table>
      </div>

    </div>
    <datalist id="registry-type">
      <option value="Internet Explorer">
      <option value="Firefox">
      <option value="Chrome">
      <option value="Opera">
      <option value="Safari">
    </datalist>
  `,
})
export class GmapsComponent {

  lat = 51.678418;
  lng = 7.809007;
}
