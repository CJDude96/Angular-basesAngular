import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-form-character',
  templateUrl: './form-character.component.html',
  styleUrl: './form-character.component.css'
})
export class FormCharacterComponent {

  @Output()
  public onNewCharacter: EventEmitter<Character> = new EventEmitter

  public chararacter: Character = {
    name: '',
    power: 0
  }

  emitCharacter():void {
    if( this.chararacter.name.length === 0 ) return; 

    this.onNewCharacter.emit(this.chararacter)

    this.chararacter = {
      name: '',
      power: 0
    }
  }

}
