import {
    Component,
    Input,
    ElementRef,
    OnInit,
    ViewChild,
} from '@angular/core';
import { WizardComponent } from 'ng2-archwizard';

/**
 * @author: Shoukath Mohammed
 */

@Component({
    selector: 'app-wizard-footer',
    templateUrl: './wizard-footer.component.html',
    styleUrls: ['./wizard-footer.component.scss']
})

export class WizardFooterComponent implements OnInit {
    @Input() parent: ElementRef;
    @Input() btnLeft: Boolean = false;
    @Input() btnRight: Boolean = false;

    //@ViewChild(WizardComponent)
    //public wizard: WizardComponent;

    constructor() { }

    ngOnInit(): void {
        //console.log(this.wizard);
    }
}
