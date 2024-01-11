import { Component, Input } from '@angular/core';
import { CharacterDTO } from 'src/app/models/character.dto';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
})
export class GridComponent {
  @Input() character!: CharacterDTO;
}
