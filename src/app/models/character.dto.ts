import { ItemDTO } from './item.dto';
import { UrlDTO } from './url.dto';

export interface CharacterDTO {
  id: number;
  name: string;
  description: string;
  modified: Date;
  resourceURI: string;
  urls: UrlDTO[];
  thumbnail: {
    path: string;
    extension: string;
  };
  comics: {
    available: number;
    returned: number;
    collectionURI: string;
    items: ItemDTO[];
  };
  stories: {
    available: number;
    returned: number;
    collectionURI: string;
    items: ItemDTO[];
  };
  events: {
    available: number;
    returned: number;
    collectionURI: string;
    items: ItemDTO[];
  };
  series: {
    available: number;
    returned: number;
    collectionURI: string;
    items: ItemDTO[];
  };
}
