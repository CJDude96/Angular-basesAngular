import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class DbzService {
  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Goku',
      power: 10000,
    },
    {
      id: uuid(),
      name: 'Vegetta',
      power: 9500,
    },
    {
      id: uuid(),
      name: 'Picollo',
      power: 9000,
    },
  ];

  public addCharacter(newCharacter: Character): void {
    this.characters.push({ ...newCharacter, id: uuid() });
  }

  public deleteCharacterById(id: string): void {
    this.characters = this.characters.filter(
      (character) => character.id !== id
    );
  }
}
