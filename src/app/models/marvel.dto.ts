import { CharacterDTO } from './character.dto';

export interface MarvelDTO {
  code: number;
  status: string;
  copyright: string;
  attributionText: string;
  attributionHTML: string;
  data: {
    offset: number;
    limit: number;
    total: number;
    count: number;
    results: CharacterDTO[];
  };
  etag: string;
}
