import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MarvelDTO } from '../models/marvel.dto';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  private apikey =
    'ts=1&apikey=38997f76617a187271e877a2da98932a&hash=98dcdab568813484b08b7827a4c7ee24';

  constructor(private http: HttpClient) {}

  getAllCharacters(): Observable<MarvelDTO> {
    return this.http.get<MarvelDTO>(
      'https://gateway.marvel.com/v1/public/characters?limit=100&' + this.apikey
    );
  }

  getCharacterById(id: string): Observable<MarvelDTO> {
    return this.http.get<MarvelDTO>(
      'https://gateway.marvel.com/v1/public/characters/' +
        id +
        '?' +
        this.apikey
    );
  }
}
