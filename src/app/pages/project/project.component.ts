import { Component, OnInit } from '@angular/core';
import { ProjectHttpService } from '../../services/http';
import { IProject } from '../contracts/IProject';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  public projects: Array<IProject>;
  public projectName: string;

  constructor(
    private projectHttpService: ProjectHttpService
  ) { }

  ngOnInit() {
    this.getProjects();
  }

  private getProjects(): void {
    this.projectHttpService.getProjects()
      .then(projects => this.projects = projects.result);
  }

  private createProject(): void {
    if (this.projectName) {
      this.projectHttpService.createProject({name: this.projectName})
        .then(() => {
          this.projectName = null;
          this.getProjects();
        });
    }
  }

  public trackByIndex(index: number): Number {
    return index;
  }
}
