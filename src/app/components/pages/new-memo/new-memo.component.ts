import { Component } from '@angular/core';
import { MemoFormComponent } from '../../memo-form/memo-form.component';

@Component({
  selector: 'app-new-memo',
  standalone: false,
  templateUrl: './new-memo.component.html',
  styleUrl: './new-memo.component.css'
})
export class NewMemoComponent {
  btnText = 'Share!';

}
