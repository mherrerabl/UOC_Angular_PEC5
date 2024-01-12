import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharacterDTO } from 'src/app/models/character.dto';
import { CharactersService } from 'src/app/services/characters.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css'],
})
export class CharacterComponent implements OnInit {
  character!: CharacterDTO;
  showInfo: boolean = false;
  apikey: string =
    '?ts=1&apikey=38997f76617a187271e877a2da98932a&hash=98dcdab568813484b08b7827a4c7ee24';
  isOnline: boolean = window.navigator.onLine;

  constructor(
    private characterServices: CharactersService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const identifier = this.activatedRoute.snapshot.paramMap.get('id');
    if (identifier !== null) {
      this.characterServices.getCharacterById(identifier).subscribe((res) => {
        this.character = res.data.results[0];
      });
    } else {
      this.router.navigateByUrl('/');
    }
    console.log(window.navigator.onLine);
  }

  toggleInfo(): void {
    this.showInfo = !this.showInfo;
  }
}
