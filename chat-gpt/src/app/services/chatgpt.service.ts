import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Configuration, OpenAIApi } from 'openai';
import { enviroment } from 'src/enviroments/enviroment';
import { Observable, filter, from } from 'rxjs';

const APIKEY = enviroment.apiKey;

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

  readonly configuration = new Configuration({
    apiKey: APIKEY
  });

  readonly openai = new OpenAIApi( this.configuration );


  getResponse( userMessage: any ): Observable<any> {

    return from(
      this.openai.createCompletion({
        model: 'text-davinci-003',
        prompt: userMessage,
        max_tokens: 150,
        temperature: 0.5
      })
      /*this.openai.createCompletion({
        model: "text-davinci-003",
        prompt: userMessage,
        temperature: 0.9,
        max_tokens: 150,
        top_p: 1,
        frequency_penalty: 0.0,
        presence_penalty: 0.6,
        stop: [" Human:", " AI:"],
      })*/

    );

  }
}
