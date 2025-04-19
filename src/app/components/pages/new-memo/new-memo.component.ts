import { Component } from '@angular/core';
import { MemoFormComponent } from '../../memo-form/memo-form.component';
import { Moment } from '../../../Moment';
import { MemoService } from '../../../services/memo.service';

@Component({
  selector: 'app-new-memo',
  standalone: false,
  templateUrl: './new-memo.component.html',
  styleUrl: './new-memo.component.css'
})
export class NewMemoComponent {
  btnText = 'Share!';

  constructor(private memoService: MemoService) {}
 
async createHandler(memo: Moment) {
    const formData = new FormData()

    formData.append("title", memo.title);
    formData.append("description", memo.description);

    if(memo.image) {
      formData.append("image", memo.image);
    }

    //enviar para o service
    this.memoService.createMemo(formData).subscribe({
      next: (res) => console.log('Requisição feita com sucesso', res),
      error: (err) => console.error('Erro na requisição', err)
    })

    //exibir mensagem

    //redirect
  }
}
