import { Component } from '@angular/core';
import { on } from 'process';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
})
export class ServerComponent {
  value = [];
  inputValue = '';

  onCreateTask(): void {
    if (this.inputValue) {
      this.value.push(this.inputValue);
      this.inputValue = '';
    }
  }

  deleteTask(val: string): void {
    this.value = this.value.filter((value) => value !== val);
  }

  updateTask(val: string): void {
    this.onCreateTask();
    this.deleteTask(val);
    this.inputValue = val;
  }
}
