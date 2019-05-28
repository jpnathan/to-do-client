import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardProjectComponent } from './form/card-project/card-project.component';
import { CheckboxTaskComponent } from './form/checkbox-task/checkbox-task.component';

@NgModule({
  declarations: [
    CardProjectComponent,
    CheckboxTaskComponent
  ],
  exports: [
    CardProjectComponent,
    CheckboxTaskComponent

  ],
  imports: [
    CommonModule
  ]
})
export class ComponentsModule { }
