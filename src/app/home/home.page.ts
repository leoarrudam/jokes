import { Component } from '@angular/core';
import { JokesService } from '../services/jokes.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private jokesService: JokesService) {}
  valorInput: string;
  piada: any[];  
  piadas: any[];

  ngOnInit(){
    this.jokesService.getAllJokes().subscribe(piadas=>{
      this.piadas = piadas;
 
     });
  }



  showJoke(){
    this.jokesService.getAllJokes().subscribe(piadas=>{

     this.searchOnJokes(); 

    }, erro=>{
      console.log(erro);
    }, ()=>{
      console.log('sucesso');
    });
  }

  indexAleatorio(piadas){
    const index=  Math.floor(Math.random()* piadas.length + 1);
    return index;
  }

  searchOnJokes() {
    this.piadas = this.piadas.filter(elemento=>{
      if (elemento.pergunta.search(this.valorInput)){
        return elemento;
      }

    })
  }

}
