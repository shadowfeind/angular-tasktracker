import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task:Task
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  onDelete(task:  any){
    this.onDeleteTask.emit(task)
  }

}
