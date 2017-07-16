import {
    Input,
    Output,
    Directive,
    HostListener,
    EventEmitter
} from '@angular/core';
import { WizardComponent } from 'ng2-archwizard';

/**
 * @author: Shoukath Mohammed
 */

@Directive({
    selector: '[appStep]'
})

export class WizardFooterDirective {
    @Input()
    public appStep: String;

    @Output()
    public finalize: EventEmitter<any> = new EventEmitter<any>();

    constructor(private wizard: WizardComponent) { }

    @HostListener('click', ['$event'])
    onStepClick(e: MouseEvent): void {
        this.appStep = this.appStep || '';

        if (!this.appStep) {
            return;
        };

        const STEP = (this.appStep === 'N')
            ? 'ToNextStep'
            : 'ToPreviousStep';

        if (this.wizard['canGo' + STEP]()) {
            this.wizard['go' + STEP]();

            if (this.appStep === 'N') {
                this.finalize.emit();
            }
        }
    }
}
