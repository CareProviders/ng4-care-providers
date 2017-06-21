import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  private states: String[] = [];
  private accountType: String = '';
  private accounts: Array<any> = [];
  private activeAccount: Object = {};

  constructor() {}

  ngOnInit() {
    this.states = [
      'Alaska',
      'Alabama',
      'Indiana',
      'Illinois',
      'Ohio',
      'New York'
    ];

    this.accounts = [{
      title: 'Care Seeker',
      value: 'CS',
      fieldName: 'careSeeker',
      classNames: 'fa-users'
    },
    {
      title: 'Care Provider',
      value: 'CP',
      fieldName: 'careProvider',
      classNames: 'fa-hand-peace-o'
    }];
  }

  onAccountSelect(ca: Object): void {
    this.activeAccount = ca;
  }

  onAccountChange(ca: any): void {
    //this.accountType = ca.value;
    //console.log(this.accountType);
  }
}