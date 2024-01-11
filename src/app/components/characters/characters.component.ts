import {
  animate,
  keyframes,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { CharacterDTO } from 'src/app/models/character.dto';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
  animations: [
    trigger('cardAnimation', [
      transition('* => *', [
        query(':enter', style({ opacity: 0 }), { optional: true }),
        query(
          ':enter',
          stagger('300ms', [
            animate(
              '1s ease-in',
              keyframes([
                style({
                  opacity: 0,
                  transform: 'translateY(-75px)',
                  offset: 0,
                }),
                style({
                  opacity: 0.5,
                  transform: 'translateY(35px)',
                  offset: 0.3,
                }),
                style({ opacity: 1, transform: 'translateY(0)', offset: 1 }),
              ])
            ),
          ]),
          { optional: true }
        ),
      ]),
    ]),
    trigger('gridAnimation', [
      transition(':enter', [
        query('.list-item', style({ opacity: 0 }), { optional: true }),
        query(
          '.list-item',
          stagger('300ms', [
            animate(
              '1s ease-in',
              keyframes([
                style({
                  opacity: 0,
                  transform: 'translateX(-75px)',
                  offset: 0,
                }),
                style({
                  opacity: 0.5,
                  transform: 'translateX(35px)',
                  offset: 0.3,
                }),
                style({ opacity: 1, transform: 'translateX(0)', offset: 1 }),
              ])
            ),
          ]),
          { optional: true }
        ),
      ]),
    ]),
  ],
})
export class CharactersComponent implements OnInit {
  characters: CharacterDTO[] = [];
  viewList: boolean = true;

  constructor(private charactersService: CharactersService) {}

  ngOnInit(): void {
    this.charactersService
      .getAllCharacters()
      .subscribe((res) => (this.characters = res.data.results));
  }

  toggleView(type: string): void {
    type == 'list' ? (this.viewList = true) : (this.viewList = false);
  }
}
