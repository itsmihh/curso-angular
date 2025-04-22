import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MemoService } from '../../../services/memo.service';
import { Moment } from '../../../Moment';

@Component({
  selector: 'app-memo',
  standalone: false,
  templateUrl: './memo.component.html',
  styleUrl: './memo.component.css'
})
export class MemoComponent {
  memo?: Moment;

  constructor(private memoService: MemoService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.memoService.getMemo(id).subscribe(item => this.memo = item.data)
  }

}
