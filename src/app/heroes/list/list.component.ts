import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  public heroNames: string[] = ['Spiderman', 'Ironman', 'Superman', 'Batman'];
  public deletedHero?: string;

  /**
   * eraseHero
   */
  public eraseHero(): void {
    this.deletedHero = this.heroNames.pop();
  }
}
