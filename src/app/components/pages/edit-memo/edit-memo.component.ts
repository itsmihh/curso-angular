import { Component } from '@angular/core';
import { Moment } from '../../../Moment';
import { MemoService } from '../../../services/memo.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MessagesService } from '../../../services/messages.service';


@Component({
  selector: 'app-edit-memo',
  standalone: false,
  templateUrl: './edit-memo.component.html',
  styleUrl: './edit-memo.component.css'
})
export class EditMemoComponent {
  memo!: Moment
  btnText: string = 'Editar';

  constructor(
    private memoService: MemoService,
    private route: ActivatedRoute,
    private messagesService: MessagesService,
    private router: Router,
  ) {}

  ngOnInit():void {
    const id = Number(this.route.snapshot.paramMap.get("id"))

    this.memoService.getMemo(id).subscribe((item) => {
      this.memo = item.data;
    })
  }

  async editHandler(memoData: Moment) {
    const id = this.memo.id;
    const formData = new FormData()

    formData.append('title', memoData.title)
    formData.append('description', memoData.description)

    if(memoData.image) {
      formData.append('image', memoData.image)
    }

    await this.memoService.updateMemo(id!, formData).subscribe()

    this.messagesService.add(`Memo ${id} was updated successfully!`)

    this.router.navigate(['/']);
  }


}
