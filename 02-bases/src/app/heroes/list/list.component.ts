import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames: string[] = ['Spiderman', 'IronMan', 'Hulk', 'She Hulk', 'Thor'];
  public deleltedHero?: string;

  removeLastHero():void {
    this.deleltedHero = this.heroNames.pop();

  }
  }


