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

  listMessage: any = [
    {user: 'ME', message: 'Hola, cómo estás?'},
    {user: 'AI', message: 'Bien, y tu?'}
  ];

  constructor(
    private svcGPT : ChatgptService
  ) {}

  sendMessage( msg: any ) {
    this.onResponse = false;
    this.svcGPT.getResponse(msg).subscribe( (res) => {
      this.listMessage.push({ user: 'AI', message: res.data.choices[0].text })
      console.log(this.listMessage);
      console.log(this.listMessage);
      this.message = '';
    })
  }

  onSubmit(form: any): void {
    this.onResponse = true;
    this.listMessage.push({ user: 'ME', message: form.value.message })
    this.sendMessage(form.value.message)
  }

}
