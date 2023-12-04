import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.page.html',
  styleUrls: ['./checkbox.page.scss'],
})
export class CheckboxPage implements OnInit {

  meses: any[] = [
    {nomeDoMes: 'Janeiro', valor: 1, marcado:false},
    {nomeDoMes: 'Fevereiro', valor: 2, marcado:true},
    {nomeDoMes: 'Janeiro', valor: 3, marcado:false},
    {nomeDoMes: 'Janeiro', valor: 4, marcado:false},
    {nomeDoMes: 'Janeiro', valor: 5, marcado:false},
  ];
  constructor() { }

  ngOnInit() {
    console.log(this.meses)
  }

  exibirMeses(){
    console.log(this.meses)
  }

}
