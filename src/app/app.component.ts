import { Component , ViewContainerRef , ViewChild , Compiler, Injector} from '@angular/core';
import { SockettestComponent } from './sockettest/sockettest.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  btnTxt = 'Lazy load module';
 
  @ViewChild('chatBox' , {read: ViewContainerRef, static: true}) chatbox!: ViewContainerRef;
  @ViewChild('feedbackBox' , {read: ViewContainerRef, static: true}) feedbackBox!: ViewContainerRef;

  constructor(private compiler: Compiler , private injector: Injector){

  }

  async lazyLoad() {
    const chatModule = await import('./chatbox/chatbox.module').then(mod => mod.ChatboxModule)
    const moduleFactory = await this.compiler.compileModuleAsync(chatModule);
    const moduleRef = moduleFactory.create(this.injector);
    const component = moduleRef.componentFactoryResolver.resolveComponentFactory(
      (moduleRef as any)._bootstrapComponents[0]
    );

    this.chatbox.createComponent(component);
  }

  async loadAnotherComponent(){
    const feedbackModule = await import('./feedback/feedback.module').then(mod => mod.FeedbackModule)
    const moduleFactory = await this.compiler.compileModuleAsync(feedbackModule);
    const moduleRef = moduleFactory.create(this.injector);
    const component = moduleRef.componentFactoryResolver.resolveComponentFactory(
      (moduleRef as any)._bootstrapComponents[0]
    );

    this.chatbox.createComponent(component);
  }

}
