import {Component} from '@angular/core';
import {LocalDataSource} from 'ng2-smart-table';
import {SmartTableService} from '../../@core/data/smart-table.service';

@Component({
  selector: 'ngx-country-list',
  templateUrl: './country-group.component.html',
  styleUrls: ['./country-group.component.scss'],
})


export class CountryGroupComponent {

  constructor(private service: SmartTableService) {
    const data = this.service.getData();
    this.source.load(data);
  }


  data = [
    {
      id: 1,
      Group: 'Leanne Graham',
      Countries: 'Bret',
    }, {
      id: 1,
      Group: 'Leanne Graham',
      Countries: 'Bret',
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
      deleteButtonContent: '<i class="nb-search" title="View Details"></i>',
      confirmDelete: true,
      showCloseButton: true,
    },
    columns: {
      id: {
        title: 'ID',
        type: 'number',
      },
      Group: {
        title: 'Country Group/Region',
        type: 'string',
      },
      Countries: {
        title: 'Countries',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  // onDeleteConfirm(event): void {
  //
  // }
}
