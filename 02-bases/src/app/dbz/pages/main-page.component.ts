import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/characters.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {
  //Aqui ocurre la inyeccion de dependecias para usar el contenido del servicio
  constructor(private dbzService: DbzService) {}
  get characters(): Character[] {
    return [...this.dbzService.characters]; // con esto lo que tengo es una copia de los personajes presentes en el servicio
  }
  onDeleteCharacter(id: string): void {
    this.dbzService.deleteCharacterById(id);
  }
  onNewCharacter(character: Character): void {
    this.dbzService.addCharacter(character);
  }
}
