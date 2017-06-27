import { WizardComponent, MovingDirection } from 'ng2-archwizard';
import { Component, OnInit, Inject, ViewEncapsulation, ViewChild } from '@angular/core';

/**
 * @author: Shoukath Mohammed
 */
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponent implements OnInit {
  private states: String[] = [];
  private accountType: String = '';
  private accounts: Array<any> = [];
  private activeAccount: Object = {};

  @ViewChild(WizardComponent)
  public wizard: WizardComponent;

  constructor() {}

  ngOnInit() {
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
