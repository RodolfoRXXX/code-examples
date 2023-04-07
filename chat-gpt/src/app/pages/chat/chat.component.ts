import { Component } from '@angular/core';
import { ChatgptService } from 'src/app/services/chatgpt.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {

  message= '';
  onResponse = false;
  date = new Date;

  listMessage: any = [];

  constructor(
    private svcGPT : ChatgptService
  ) {}

  sendMessage( msg: any ) {
    this.svcGPT.getResponse(msg).subscribe( (res) => {
      this.onResponse = false;
      this.listMessage.push({ user: 'AI', message: res.data.choices[0].text, date: (this.date.getHours() + ':' + this.date.getMinutes()).toString() });
    })
  }

  onSubmit(form: any): void {
    this.message = '';
    this.onResponse = true;
    this.listMessage.push({ user: 'YO', message: form.value.message, date: (this.date.getHours() + ':' + this.date.getMinutes()).toString() })
    window.scroll({ top: 1000, behavior: 'smooth' });
    this.sendMessage(form.value.message)
  }

  del_chat(): void {
    this.listMessage = [];
  }

}
