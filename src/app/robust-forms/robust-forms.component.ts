import { FormGroup } from '@angular/forms';
import { Component, EventEmitter, Output, Input } from '@angular/core';

import { Group } from './group/group';
import { RobustForms, ReactiveFormsFactory } from '.';

@Component({
  selector: 'robust-forms',
  templateUrl: './robust-forms.component.html'
})
export class RobustFormsComponent {

  formGroup: FormGroup;

  @Input() groups: Group[] = [];
  @Output() getValues: EventEmitter<Object> = new EventEmitter();

  ngOnInit() {
    this.groups = RobustForms.fromJson(this.groups);
    this.formGroup = ReactiveFormsFactory.createFormGroupFromGroups(this.groups);
  }

  emitValues() {
    this.getValues.emit(this.formGroup.value);
  }
}
