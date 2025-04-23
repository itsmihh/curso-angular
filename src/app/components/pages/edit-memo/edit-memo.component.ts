import { Component } from '@angular/core';
import { Moment } from '../../../Moment';
import { MemoService } from '../../../services/memo.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-edit-memo',
  standalone: false,
  templateUrl: './edit-memo.component.html',
  styleUrl: './edit-memo.component.css'
})
export class EditMemoComponent {
  memo!: Moment
  btnText: string = 'Editar';

  constructor(private memoService: MemoService, private route: ActivatedRoute) {}

  ngOnInit():void {
    const id = Number(this.route.snapshot.paramMap.get("id"))

    this.memoService.getMemo(id).subscribe((item) => {
      this.memo = item.data;
    })
  }


}
