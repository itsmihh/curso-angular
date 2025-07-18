import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Moment } from '../../Moment';

@Component({
  selector: 'app-memo-form',
  standalone: false,
  templateUrl: './memo-form.component.html',
  styleUrl: './memo-form.component.css'
})
export class MemoFormComponent {
  @Input() btnText!: string;
  @Output() onSubmit = new EventEmitter<Moment>();
  @Input() memoData: Moment | null = null;

  memoForm!: FormGroup;


  ngOnInit():void {
    this.memoForm = new FormGroup({
      id: new FormControl(this.memoData ? this.memoData.id : ''),
      title: new FormControl(this.memoData ? this.memoData.title : '', [Validators.required]),
      description: new FormControl(this.memoData ? this.memoData.description : '', [Validators.required]),
      image: new FormControl('')
    });
  }

  get title() {
    return this.memoForm.get('title')!;
  }

  get description() {
    return this.memoForm.get('description')!;
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];

    this.memoForm.patchValue({ image: file });
  }


  submit() {
    if(this.memoForm.invalid) {
      return
    }
    console.log(this.memoForm.value);

    this.onSubmit.emit(this.memoForm.value);
  }

}
