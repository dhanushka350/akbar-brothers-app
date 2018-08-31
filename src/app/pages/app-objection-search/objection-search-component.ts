import {Component} from '@angular/core';
import {SmartTableService} from '../../@core/data/smart-table.service';
import {LocalDataSource} from 'ng2-smart-table';
import {NgDateRangePickerOptions} from 'ng-daterangepicker';


@Component({
  selector: 'objection-search',
  styleUrls: ['./objection-search-component.scss'],
  templateUrl: './objection-search-component.html'

})

export class ObjectionSearchComponent {
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
}


