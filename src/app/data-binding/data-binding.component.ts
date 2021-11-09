import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url = 'http://loiane.com';
  cursoAngular: boolean = true;
  urlImagem = 'http://lorempixel.com/400/200/sports/1/Dummy-Text/';

  valorAtual: string = '';
  valorSalvo: any;

  isMouseOver: boolean = false;

  nome: string = 'abc';

  nomeDoCurso: string = 'Angular';

  pessoa: any = {
    nome: 'def',
    idade: 20
  }

  getValor(){
    return 1;
  }

  getCurtirCurso(){
    return true;
  }

  botaoCLicado(){
    alert('AHHHHHHHHHHHHH!');
  }

  onKeyUp(evento: KeyboardEvent){
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }

  salvarValor(valor: any){
    this.valorSalvo = valor;
  }

  mouseOverOut(){
      this.isMouseOver = !this.isMouseOver;
  }

  onMudouValor(evento : any){
    console.log(evento.novoValor)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
