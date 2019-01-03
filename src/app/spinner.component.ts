import { Component, Input, forwardRef } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
  selector: "spinner",
  template: `
    <div class="input-group">
      <input
        type="number"
        class="form-control no-spinners"
        [(ngModel)]="value"
      />
      <div class="input-group-append">
        <button class="btn btn-default" type="button" (click)="decrement()">
          <i class="fa fa-minus"></i>
        </button>
        <button class="btn btn-default" type="button" (click)="increment()">
          <i class="fa fa-plus"></i>
        </button>
      </div>
    </div>
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SpinnerComponent),
      multi: true
    }
  ]
})
export class SpinnerComponent implements ControlValueAccessor {
  propagateChange: any = () => {};
  _model: number = 0;

  increment() {
    this.value = this.value + 1;
  }

  decrement() {
    this.value = this.value - 1;
  }

  changeValue(value: number) {
    this.value = value;
  }

  writeValue(value) {
    if (value) {
      this.value = value;
    }
    this.changeValue(+this._model);
  }

  // required by ControlValueAccessor
  registerOnChange(fn) {
    this.propagateChange = fn;
  }
  registerOnTouched() {}

  get value(): number {
    return this._model;
  }

  set value(value: number) {
    this._model = value;
    this.propagateChange(value);
  }
}
