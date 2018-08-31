import {Component} from '@angular/core';
import {SmartTableService} from '../../@core/data/smart-table.service';
import {LocalDataSource} from 'ng2-smart-table';
import {NgDateRangePickerOptions} from 'ng-daterangepicker';


@Component({
  selector: 'trademark-search',
  styleUrls: ['./trademark-search-component.scss'],
  templateUrl: './trademark-search-component.html'

})

export class TrademarkSearchComponent {
  options: NgDateRangePickerOptions;
  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableService) {
    const data = this.service.getData();
    this.source.load(data);
  }

  ngOnInit() {
    this.options = {
      theme: 'default',
      range: 'tm',
      dayNames: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      presetNames: ['This Month', 'Last Month', 'This Week', 'Last Week', 'This Year', 'Last Year', 'Start', 'End'],
      dateFormat: 'yMd',
      outputFormat: 'DD/MM/YYYY',
      startOfWeek: 1
    };
  }

  data = [
    // {
    //   id: 1,
    //   Type: "type x",
    //   Description: "desc x",
    // }, {
    //   id: 1,
    //   Type: "type x",
    //   Description: "desc x",
    // },
    // {
    //   id: 1,
    //   Type: "type x",
    //   Description: "desc x",
    // }, {
    //   id: 1,
    //   Type: "type x",
    //   Description: "desc x",
    // }, {
    //   id: 1,
    //   Type: "type x",
    //   Description: "desc x",
    // }, {
    //   id: 1,
    //   Type: "type x",
    //   Description: "desc x",
    // }, {
    //   id: 1,
    //   Type: "type x",
    //   Description: "desc x",
    // }, {
    //   id: 1,
    //   Type: "type x",
    //   Description: "desc x",
    // }, {
    //   id: 1,
    //   Type: "type x",
    //   Description: "desc x",
    // }, {
    //   id: 1,
    //   Type: "type x",
    //   Description: "desc x",
    // }, {
    //   id: 1,
    //   Type: "type x",
    //   Description: "desc x",
    // }, {
    //   id: 1,
    //   Type: "type x",
    //   Description: "desc x",
    // },

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
        width: '10%',
      },
      Logo: {
        title: 'Logo',
        type: 'string',
        width: '30%',
      },
      FileNo: {
        title: 'FileNo',
        type: 'string',
        width: '30%',
      },
      AppNo: {
        title: 'AppNo',
        type: 'string',
        width: '30%',
      },
      Brand: {
        title: 'Brand',
        type: 'string',
        width: '30%',
      },
      TMName: {
        title: 'TMName',
        type: 'string',
        width: '30%',
      },
      TMNo: {
        title: 'TMNo',
        type: 'string',
        width: '30%',
      },
      Class: {
        title: 'Class',
        type: 'string',
        width: '30%',
      },
      Company: {
        title: 'Company',
        type: 'string',
        width: '30%',
      },
      Country: {
        title: 'Country',
        type: 'string',
        width: '30%',
      },
      Status: {
        title: 'Status',
        type: 'string',
        width: '30%',
      },
      Comment: {
        title: 'Comment',
        type: 'string',
        width: '30%',
      },
      RegDate: {
        title: 'Reg.Date',
        type: 'string',
        width: '30%',
      },
      ExpDate: {
        title: 'Exp.Date',
        type: 'string',
        width: '30%',
      },
    },
  };
}


