import { Profile } from './profile.model';
import { Component, OnInit, Input } from '@angular/core';
import { STATES, GENDER } from '../../constants/shared.constants';

/**
 * @author: Shoukath Mohammed
 */
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  @Input() profileInfo: Profile;
  private imagePath: any = '';
  private states: Array<Object> = STATES;
  private gender: Array<Object> = GENDER;

  constructor() {}

  ngOnInit() {}

  onFileInput(e: Event): void {
    const r = new FileReader();
    const file = (<HTMLInputElement>e.target).files[0];

    r.onload = (ev: any) => {
      this.imagePath = ev.target.result;
    };
    r.readAsDataURL(file);
  }
}
