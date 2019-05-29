import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import { TaskHttpService } from '../../../../services';
import { ITasks } from '../../../../pages/contracts';

@Component({
  selector: 'app-checkbox-task',
  templateUrl: './checkbox-task.component.html',
  styleUrls: ['./checkbox-task.component.scss']
})
export class CheckboxTaskComponent {
  @Input()
  public task: ITasks;

  @Output()
  public childEmitter: EventEmitter<any> = new EventEmitter<any>();

  public taskDescription: string;
  public isEditing: Boolean = false;

  constructor(
    private taskHttpService: TaskHttpService
  ) { }

  public deleteTask(taskId: number) {
    this.taskHttpService.deleteTask(taskId)
      .then(() => this.childEmitter.emit());
  }

  public async updateTask(taskId: number) {
    if (this.taskDescription) {
      const taskModel = {
        description: this.taskDescription
      };
      await this.taskHttpService.updateTask(taskId, taskModel)
        .then(task => {
          this.childEmitter.emit();
          this.editTask();
        });
    }
  }

  public changeTaskStatus(taskId: number, value: any) {
    const taskModel = {
      enabled: !value.checked
    };

    !taskModel.enabled && (taskModel['finishDate'] = new Date());
    this.taskHttpService.updateTask(taskId, taskModel)
      .then(task => {
        this.childEmitter.emit();
      });
  }

  public editTask() {
    this.taskDescription = this.task.description;
    this.isEditing = !this.isEditing;
  }
}
