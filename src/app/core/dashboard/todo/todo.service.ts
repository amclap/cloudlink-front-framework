import {Injectable} from '@angular/core';

@Injectable()
export class TodoService {

  private _todoList = [
    { text: '整理前端架构' },
    { text: '学习心理学' },
    { text: '吃饭' },
    { text: '谈心' },
    { text: '三千勇士落凤坡' },
    { text: 'Ei cum solet appareat, ex est graeci mediocritatem' },
    { text: 'Get in touch with akveo team' },
    { text: 'Write email to business cat' },
    { text: 'Have fun with blur admin' },
    { text: 'What do you think?' },
  ];

  getTodoList() {
    return this._todoList;
  }
}
