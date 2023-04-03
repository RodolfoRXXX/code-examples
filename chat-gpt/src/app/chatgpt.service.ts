import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/*

Aquí importamos el módulo HttpClient e inyectamos este servicio para realizar peticiones HTTP a la API de chatGPT 
 
*/

@Injectable({
  providedIn: 'root'
})
export class ChatgptService {

  constructor(
    private http: HttpClient
  ) { }

  getResponse( userMessage: string ) {
    const apiUrl = 'https://api.openai.com/v1/engines/davinci-codex/completions';
    const prompt = `Me: ${userMessage}\nAI`;

    const headers = {
      'Content-type' : 'applicaction/json',
      'Authorization': 'Bearer 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'
    };

    const data = {
      'prompt': prompt,
      'max_tokens': 150,
      'temperature': 0.7
    }

    return this.http.post(apiUrl, data, { headers })
  }
}
