import { Component } from '@angular/core';


@Component({
  selector: 'app-body',
  templateUrl:'./body.component.html'
})

export class BodyComponent{

  mostrar: true;

  frace: any = {
    mensaje: 'se tiene una gran responsabiliad',
    autor:'Edisson'
  }

  personajes: string[] = ['goku', 'vegeta', 'gohan'];
}