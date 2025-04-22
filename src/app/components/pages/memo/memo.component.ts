import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MemoService } from '../../../services/memo.service';
import { Moment } from '../../../Moment';
import { environment } from '../../../../environments/environment';
import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-memo',
  standalone: false,
  templateUrl: './memo.component.html',
  styleUrl: './memo.component.css'
})
export class MemoComponent {
  memo?: Moment;
  baseApiUrl = environment.baseApiUrl;
  faTimes = faTimes;
  faEdit = faEdit;

  constructor(private memoService: MemoService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.memoService.getMemo(id).subscribe(item => this.memo = item.data)
  }

}
