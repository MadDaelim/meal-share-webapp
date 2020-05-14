import {Component, EventEmitter, Input, Output} from '@angular/core';


@Component({
  selector: 'app-submit-button',
  templateUrl: './submit-button.component.html'
})
export class SubmitButtonComponent {
  @Input() label: string;
  @Input() loading = false;
  @Input() error: any;
  @Output() submit = new EventEmitter<any>();

  onClickButton(event) {
    this.submit.emit(event);
  }
}
