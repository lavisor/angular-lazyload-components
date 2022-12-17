import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedbackComponent } from './feedback.component';



@NgModule({
  declarations: [
    FeedbackComponent
  ],
  bootstrap: [FeedbackComponent],
  imports: [
    CommonModule
  ]
})
export class FeedbackModule { }
