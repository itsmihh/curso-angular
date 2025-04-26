import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MemoService } from '../../../services/memo.service';
import { Moment } from '../../../Moment';
import { environment } from '../../../../environments/environment';
import { faEdit, faTimes } from '@fortawesome/free-solid-svg-icons';
import { MessagesService } from '../../../services/messages.service';
import { Comments } from '../../../Comments';
import { FormGroup, FormControl, Validators, FormGroupDirective } from '@angular/forms';
import { CommentService } from '../../../services/comment.service';




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

  commentForm!: FormGroup;


  constructor(
    private memoService: MemoService,
    private route: ActivatedRoute,
    private messagesService: MessagesService,
    private router: Router,
    private commentService: CommentService,
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.memoService.getMemo(id).subscribe(item => this.memo = item.data)

    this.commentForm = new FormGroup({
      text: new FormControl("", [Validators.required]),
      username: new FormControl("", [Validators.required]),
    });
  }

  get text() {
    return this.commentForm.get('text')!;
  }

  get username() {
    return this.commentForm.get('username')!;
  }

  async removeHandler(id: number) {
    await this.memoService.removeMemo(id).subscribe();

    this.messagesService.add("Memo deleted!")

    this.router.navigate(['/']);
  }

  async onSubmit(formDirective: FormGroupDirective) {

    if(this.commentForm.invalid) {
      return
    }

    const data: Comments = this.commentForm.value;
    
    data.memoGalleryId = Number(this.memo!.id)

    await this.commentService.createComment(data).subscribe((comment) => this.memo!.comments!.push(comment.data))

    this.messagesService.add("Comment added!")

    this.commentForm.reset()

    formDirective.resetForm();
  }

}
