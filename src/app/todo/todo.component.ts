import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent {
  title = "Todo APP!";
  todolist :{id:Number,task:string}[] = [];
  taskInput : string ="";
  
  addTask(){
    this.todolist.push({id:this.todolist.length+1,task:this.taskInput});
    console.log(this.todolist);
    this.taskInput = "";
  }
  deleteTask(id:Number){
  this.todolist =this.todolist.filter((item)=>item.id != id);
  }
}
