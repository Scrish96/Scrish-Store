import { Component } from '@angular/core';
import { Product } from './product.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'scrishstore';
  name = 'Crhistian';
  age = 26;
  img = 'https://source.unsplash.com/random';
  btnDisabled= true;
  person={
    name:"Crhistian",
    age:26,
    avatar:'https://source.unsplash.com/random'
  }

  names: string[] = ['José','Maria','Giuliana','Manuel']
  newName: string = ""
  products: Product[] = [
    {
      name:"Ron Cartavio",
      price:22.50,
      img:"../assets/imgs/cartavio.jpg"
    },
    {
      name:"Wisky Ballantines",
      price:47.90,
      img:"../assets/imgs/ballantines.jpg"
    },
    {
      name:"Pisco 4 Gallos",
      price:45.90,
      img:"../assets/imgs/cuatrogallos.jpg"
    },
    {
      name:"Caja de bombones Bon o Bon",
      price:12.00,
      img:"../assets/imgs/bonobon.jpg"
    },
    {
      name:"Bebida Cifrut sabor Citrus Punch ",
      price:6.50,
      img:"../assets/imgs/cifrut.jpg"
    },
    {
      name:"Wisky Vat69",
      price:21.50,
      img:"../assets/imgs/VAT69.jpg"
    },
    {
      name:"Wisky en Caja de Something Special",
      price:51.90,
      img:"../assets/imgs/somethingspecial.jpg"
    },
    {
      name:"Vino Borgoña Tabernero",
      price:22.50,
      img:"../assets/imgs/tabernero.jpg"
    },
    {
      name:"Gaseosa Pespsi 1.5L",
      price:6.50,
      img:"../assets/imgs/pepsi.jpg"
    },
    {
      name:"Vodka Smirnoff",
      price:36.50,
      img:"../assets/imgs/smirnoff.jpg"
    },
    {
      name:"Vodka RussKaya",
      price:21.50,
      img:"../assets/imgs/russkaya.jpg"
    },
    {
      name:"Crema Volteada de mi amorcito",
      price:45.90,
      img:"../assets/imgs/cremavolteada.jpg"
    }
  ]

  btnToggle(){
    this.btnDisabled = !this.btnDisabled;
  }

  increaseAge(){
    this.person.age+=1
  }

  onScroll(evento: Event){
    const element= evento.target;
    const element2= evento.target as HTMLElement;
      console.log(evento);
      console.log(element2.scrollTop);
  }

  changeName(evento: Event){
    const input = evento.target as HTMLInputElement;

    this.person.name =input.value
        console.log(this.person.name);

  }

  addName(){
    this.names.push(this.newName)
    this.newName=""
  }

  deleteName(index: number){
    this.names.splice(index,1)
  }

}

