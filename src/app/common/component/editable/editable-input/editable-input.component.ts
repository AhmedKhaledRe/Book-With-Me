import { Component, Input, Output, EventEmitter } from '@angular/core';
import { EditableComponent } from '../editable-component';

@Component({
  selector: 'app-editable-input',
  templateUrl: './editable-input.component.html',
  styleUrls: ['./editable-input.component.css']
})
export class EditableInputComponent extends EditableComponent  {

  @Input() type: string = 'text';

  @Input() transformView = value => value;
}
