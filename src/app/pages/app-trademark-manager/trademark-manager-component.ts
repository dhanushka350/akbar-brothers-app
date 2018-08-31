import {Component} from '@angular/core';
import {SmartTableService} from '../../@core/data/smart-table.service';
import {LocalDataSource} from 'ng2-smart-table';


@Component({
  selector: 'ngx-app-tm',
  styleUrls: ['./trademark-manager-component.scss'],
  templateUrl: './trademark-manager-component.html',

})

export class TrademarkManagerComponent {
  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableService) {
    const data = this.service.getData();
    this.source.load(data);
  }
  data = [
    {
      id: 1,
      Type: 'type x',
      Description: 'desc x',
    },
    {
      id: 1,
      Type: 'type x',
      Description: 'desc x',
    },
    {
      id: 1,
      Type: 'type x',
      Description: 'desc x',
    },
  ];

  settings = {

    columns: {
      id: {
        title: '#',
        type: 'number',
      },
      Company: {
        title: 'Company/Agent',
        type: 'string',
      },
      Country: {
        title : 'Country',
        type: 'string',
      },
      Address: {
        title : 'Address',
        type: 'string',
      },
    },
  };
}
