import { Component } from '@angular/core';

import { MemoService } from '../../../services/memo.service';
import { Moment } from '../../../Moment';
import { environment } from '../../../../environments/environment.development';
// import { environment } from '../../../../environments/environment';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  allMemos: Moment[] = []
  memos: Moment[] = []
  baseApiUrl = environment.baseApiUrl;

  faSearch = faSearch;
  searchTerm: string = "";

  constructor(private memoService: MemoService) {}

  ngOnInit(): void {
    this.memoService.getMemos().subscribe((items) => {

      const data = items.data;

      data.map((item) => {
        if (item.createdAt) {
          item.createdAt = new Date(item.createdAt).toLocaleString('pt-BR');
        }
      });
      

      this.allMemos = data;
      this.memos = data;
    })
  }

  search(e: Event): void {
    const target = e.target as HTMLInputElement;
    const value = target.value;

    this.memos = this.allMemos.filter(memos => {
      return memos.title.toLowerCase().includes(value)
    })

  }

}
