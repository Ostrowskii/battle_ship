import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
/*
1 - implements é uma função do java script (method) ele implementa uma classe para o nosso projeto
ent aqui eu tive problema com o oninit q precisava do ngOnInit para funcionar.
(eu coloquei o meu mouse em cima de appcomponent) eu cliquei numa lampada e ela criou um gênio
q realizou o meu desejo da tela de bug sumir
2 -  métodos geralmente vem nome()
os dois pontos é para a tipagem derr
3 -  o ngOninit é o primeiro método a ser chamado quando a pagina carrega. ou seja. se tu quer q algo
comece com x, chama o metodo lá dentro

*/
export class AppComponent implements OnInit{
  board = [[null, null, null], [null, null, null], [null, null, null]]
  title = 'my-app';

  ngOnInit(): void {
    this.showBoard()
  }
  showBoard() {
    console.log('teste')
  }
}
