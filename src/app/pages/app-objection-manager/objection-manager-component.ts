import {Component} from '@angular/core';
import {SmartTableService} from '../../@core/data/smart-table.service';
import {LocalDataSource} from 'ng2-smart-table';


@Component({
  selector: 'ngx-objection-manager',
  styleUrls: ['./objection-manager-component.scss'],
  templateUrl: './objection-manager-component.html',

})

export class ObjectionManagerComponent {
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
    // add: {
    //   addButtonContent: '<i class="nb-plus"></i>',
    //   createButtonContent: '<i class="nb-checkmark"></i>',
    //   cancelButtonContent: '<i class="nb-close"></i>',
    // },
    // edit: {
    //   editButtonContent: '<i class="nb-edit"></i>',
    //   saveButtonContent: '<i class="nb-checkmark"></i>',
    //   cancelButtonContent: '<i class="nb-close"></i>',
    // },
    // delete: {
    //   deleteButtonContent: '<i class="nb-trash"></i>',
    //   confirmDelete: true,
    //   showCloseButton: true,
    // },
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
        title: 'Country',
        type: 'string',
      },
      Address: {
        title: 'Address',
        type: 'string',
      },
    },
  };
}
