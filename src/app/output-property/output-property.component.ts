import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'contador',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
})
export class OutputPropertyComponent implements OnInit {

  constructor() { }

  @Output()
  mudouValor = new EventEmitter();

  @Input()
  valor: number = 0;

  incrementa(){
    this.valor++;
    this.mudouValor.emit({novoValor: this.valor})
  }

  decrementa(){
    this.valor--;
    this.mudouValor.emit({novoValor: this.valor})
  }

  ngOnInit(): void {
  }

}
