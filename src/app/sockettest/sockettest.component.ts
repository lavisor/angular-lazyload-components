import { Component } from '@angular/core';
import { WebsocketService } from '../services/websocket.service';

@Component({
  selector: 'app-sockettest',
  templateUrl: './sockettest.component.html',
  styleUrls: ['./sockettest.component.scss']
})
export class SockettestComponent {
  title = 'socketrv';
  content = '';
  received : any = [];
  sent : any = [];

  constructor(private WebsocketService: WebsocketService) {
    WebsocketService.messages.subscribe(msg => {
      this.received.push(msg);
      console.log("Response from websocket: " + msg);
    });
  }

  sendMsg() {
    let message = {
      source: '',
      content: ''
    };

    let sampleObject = {
        event: "client-widget-message",
        data: {
              senderId: "4jr6ZGVQll02DlVXt1671210152044",
              channelName: "private-4jr6ZGVQll02DlVXt16712101520441671210153065",
              message: {
                  text: this.content
              },
              display: {
                  img: null,
                  name: null,
                  lead: true,
                  text: this.content,
                  time: 1671265887509,
                  type: "text"
              }
          },
          channel: "presence-insentstaging1-widget-user-4jr6ZGVQll02DlVXt1671210152044"
      };
    message.source = 'localhost';
    message.content = this.content;

    this.sent.push(sampleObject);
    this.WebsocketService.messages.next(sampleObject);
  }
}
