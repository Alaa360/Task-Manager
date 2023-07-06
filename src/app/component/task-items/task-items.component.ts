import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-items',
  templateUrl: './task-items.component.html',
  styleUrls: ['./task-items.component.css'],
})
export class TaskItemsComponent implements OnInit{
  @Input() task!: Task;
  @Output() OnDeleteTask : EventEmitter<Task> = new EventEmitter()
  @Output() OnToggleReminder : EventEmitter<Task> = new EventEmitter()

  faTimes = faTimes;

  ngOnInit(): void { }

  OnDelete(task: Task){
    this.OnDeleteTask.emit(task)
  }
  onToggle(task: Task){
    this.OnToggleReminder.emit(task)
  }
}
