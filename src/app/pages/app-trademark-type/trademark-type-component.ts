import {Component} from '@angular/core';
import {SmartTableService} from '../../@core/data/smart-table.service';
import {LocalDataSource} from 'ng2-smart-table';

@Component({
  selector: 'ngx-trademark-type',
  styleUrls: ['./trademark-type-component.scss'],
  templateUrl: './trademark-type-component.html',

})

export class TrademarkTypeComponent {
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

  ];

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
      showCloseButton: true,
    },
    columns: {
      id: {
        title: 'ID',
        type: 'number',
        width: '8%',
      },
      Type: {
        title: 'Type',
        type: 'string',
        width: '32%',
      },
      Description: {
        title : 'Description',
        type: 'string',
        width: '60%',
      },
    },
  };
}
