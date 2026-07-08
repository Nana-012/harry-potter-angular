import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HpService } from '../../services/hp.service';
import { Character } from '../../models/character';

@Component({
  selector: 'app-character-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './component.html',
  styleUrl: './component.css'
})
export class CharacterListComponent implements OnInit {
  characters: Character[] = [];

  constructor(
    private hpService: HpService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.hpService.getCharacters().subscribe({
      next: (data) => {
        this.characters = data;
        this.cdr.detectChanges();
      },
      error: (err) => {
        console.error('Error al obtener los datos de la API:', err);
      }
    });
  }
}
