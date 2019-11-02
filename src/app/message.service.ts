//nieuwe service voor messages na command ng generate service message
//injectable zodat DI uitgevoerd kan worden
import { Injectable } from '@angular/core';
//decorator Injectable
@Injectable({
  //ook weer in de root zodat het centraal benaderd kan worden
  providedIn: 'root',
})
//de class naam met wat het levert en volgens conventie postfix Service
export class MessageService {
//bevat property messages dat een array is van strings met default een lege array
  messages: string[] = [];
//methode van toevoegen van een string
  add(message: string) {
//die een message pushed aan de array, zet het achteraan de rij
    this.messages.push(message);
  }
//methode die de complete array van messages leegmaakt door het te zetten naar een lege array
  clear() {
    this.messages = [];
  }
}