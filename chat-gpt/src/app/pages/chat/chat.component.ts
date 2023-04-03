import { Component } from '@angular/core';
import { ChatgptService } from 'src/app/chatgpt.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {

  userMessage = 'Hi, How are you?';
  messages = [{}];

  constructor(
    private svcGPT : ChatgptService
  ) {}

  sendMessage() {
    this.messages.push({ author: 'Me', message: this.userMessage });

    this.svcGPT.getResponse(this.userMessage).subscribe( (response:any) => {
      const aiMessage = response.choices[0].text.trim();
      this.messages.push({ author: 'AI', message: aiMessage });
      this.userMessage = '';
      console.log(this.messages);
    })
  }

}
