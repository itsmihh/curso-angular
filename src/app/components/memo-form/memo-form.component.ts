import { Component, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-memo-form',
  standalone: false,
  templateUrl: './memo-form.component.html',
  styleUrl: './memo-form.component.css'
})
export class MemoFormComponent {
  @Input() btnText!: string;

  memoForm!: FormGroup

  ngOnInit():void {
    this.memoForm = new FormGroup({
      id: new FormControl(''),
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      image: new FormControl('')
    });
  }

  get title() {
    return this.memoForm.get('title')!;
  }

  get description() {
    return this.memoForm.get('description')!;
  }


  submit() {
    if(this.memoForm.invalid) {
      return
    }
    console.log("Enviou o formulário");
  }

}
