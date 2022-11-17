import { Component } from '@angular/core';
import { Item } from './models/item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  public value: string = '';

  public list: Item[] = [];

  public adicionar() {
    this.list.push({
      nome: this.value,
      finalizada: false
    });
    this.value = '';
  }

  public excluir(index: number) {
    this.list.splice(index, 1);
  }
}
