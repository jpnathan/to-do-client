import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardProjectComponent } from './form/card-project/card-project.component';
import { CheckboxTaskComponent } from './form/checkbox-task/checkbox-task.component';
import {FormsModule} from '@angular/forms';

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
    CommonModule,
    FormsModule
  ]
})
export class ComponentsModule { }
