import {Component, OnInit} from '@angular/core';
import {TodoService} from '../../services/base/todo.service';
import {ITodoItem} from '../../models/contracts/todoItem';

@Component({
    selector: 'app-home',
    templateUrl: 'home.html'
})
export class HomeComponent implements OnInit {
    public items: Array<ITodoItem>;

    constructor(private _todoService: TodoService) {
    }

    public ngOnInit(): void {
        this._todoService.getAll()
            .then(items => this.items = items);
    }

    public updateItem(item: ITodoItem) {
        this._todoService.update(item)
            .then(success => console.log(success));
    }
}
