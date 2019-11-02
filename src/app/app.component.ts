import { Component } from '@angular/core';

// at component is een decorator
@Component({
  // selector geef je de directive naam op van de component die dan in de html gebruikt kan worden
  selector: 'app-root',
  // templateUrl verwijst naar de html deel van dit component, view layout
  templateUrl: './app.component.html',
  //specifieke css voor dit component, en afgeschermd voor andere componenten
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //component properties
  title = 'Tour of Heroes';
}