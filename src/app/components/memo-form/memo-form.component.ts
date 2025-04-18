import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-memo-form',
  standalone: false,
  templateUrl: './memo-form.component.html',
  styleUrl: './memo-form.component.css'
})
export class MemoFormComponent {
  @Input() btnText!: string;

}
