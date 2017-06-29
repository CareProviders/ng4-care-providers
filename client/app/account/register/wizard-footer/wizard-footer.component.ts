import { Component, Input } from '@angular/core';


@Component({
    selector: 'app-wizard-footer',
    templateUrl: './wizard-footer.component.html',
    styleUrls: ['./wizard-footer.component.scss']
})

export class WizardFooterComponent {
    @Input() btnLeft: Boolean = false;
    @Input() btnRight: Boolean = false;
}