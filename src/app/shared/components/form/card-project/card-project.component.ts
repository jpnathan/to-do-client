import {
  Component, EventEmitter,
  Input, OnInit,
  Output
} from '@angular/core';

import {
  ProjectHttpService,
  TaskHttpService
} from '../../../../services';
import { IProject, ITasks } from '../../../../pages/contracts';

@Component({
  selector: 'app-card-project',
  templateUrl: './card-project.component.html',
  styleUrls: ['./card-project.component.scss']
})
export class CardProjectComponent implements OnInit {
  @Input()
  public project: IProject;

  @Output()
  public childEmitter: EventEmitter<any> = new EventEmitter<any>();

  public tasksDone: Array<ITasks>;
  public tasksToDo: Array<ITasks>;
  public taskName: string;
  public projectName: string;
  public isEditing: Boolean = false;

  constructor(
    private projectHttpService: ProjectHttpService,
    private taskHttpService: TaskHttpService
  ) { }

  ngOnInit(): void {
    this.getTasks();
  }

  public deleteProject(projectId: number) {
    this.projectHttpService.deleteProject(projectId)
      .then(() => this.childEmitter.emit());
  }

  public updateProject(projectId: number) {
    if (this.projectName) {
      const projectModel = { name: this.projectName };
      this.projectHttpService.updateProject(projectId, projectModel)
        .then(() => {
          this.editProject();
          this.childEmitter.emit();
          this.projectName = '';
        });
    }
  }

  public getTasks() {
    this.taskHttpService.getTasks(this.project.projectId)
      .then(tasks => {
        this.tasksDone = tasks.result.filter((task: ITasks) => !task.enabled);
        this.tasksToDo = tasks.result.filter((task: ITasks) => task.enabled);
      });
  }

  public createTask() {
    if (this.taskName) {
      const taskModel = {
        projectId: this.project.projectId,
        description: this.taskName
      };

      this.taskHttpService.createTask(taskModel)
        .then(tasks => {
          this.taskName = '';
          this.getTasks();
        });
    }
  }

  public editProject() {
    this.projectName = this.project.name;
    this.isEditing = !this.isEditing;
  }

  public trackByIndex(index: number): Number {
    return index;
  }
}
