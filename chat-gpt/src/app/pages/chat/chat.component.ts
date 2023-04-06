import { Component } from '@angular/core';
import { ChatgptService } from 'src/app/services/chatgpt.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {

  message = '';
  aiMessage = '';

  constructor(
    private svcGPT : ChatgptService
  ) {}

  sendMessage( msg: any ) {

    console.log(msg)

    this.message = msg;

    this.svcGPT.getResponse(this.message).subscribe( (res) => {
      console.log(res.data.choices[0].text);
      this.aiMessage = res.data.choices[0].text;
    })
    this.message = '';

  }

  onSubmit(form: any): void {
    this.sendMessage(form.value.message)
  }

}
