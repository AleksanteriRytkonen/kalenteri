import { Component, Input } from '@angular/core';

@Component({
    selector: 'input-app',
    templateUrl: './input.component.html'
})
export class InputComponent {
    @Input() tapahtumaId: string;
    @Input() tapahtumaKlo: string;
    @Input() tapahtumaPvm: string;
}