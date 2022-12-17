import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatboxComponent } from './chatbox.component';



@NgModule({
  declarations: [
    ChatboxComponent
  ],
  bootstrap:[ChatboxComponent],
  imports: [
    CommonModule
  ]
})
export class ChatboxModule { }
