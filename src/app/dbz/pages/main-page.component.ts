import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
    selector: 'app-dbz-main-page',
    templateUrl: 'main-page.component.html'
})

export class MainPageComponent {
    public characters: Character[] = [
        {
            name: "Goku",
            power: 10000
        },
        {
            name: "Vegetta",
            power: 9500
        },
        {
            name: "Picollo",
            power: 9000
        }
    ]
}