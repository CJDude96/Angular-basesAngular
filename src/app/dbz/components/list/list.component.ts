import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  @Output()
  onDeleteCharacter: EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList: Character[] = [
    {
      name: 'Trunks',
      power: 2000,
    },
  ];

  public deleteBtn(id: string = ''): void {
    this.onDeleteCharacter.emit(id);
  }
}
