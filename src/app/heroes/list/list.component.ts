import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroNames: string[] = ['Spiderman', 'Irondman', 'Hulk', 'SheHulk']
  public deletedHero?: string; //Propiedad de clase

  removeLastHero():void {
    this.deletedHero = this.heroNames.pop();

  }
}
