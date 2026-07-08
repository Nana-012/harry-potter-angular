import { Component } from '@angular/core';
import { CharacterListComponent } from './components/character-list/component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CharacterListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  title = 'harry-potter-app';
}
