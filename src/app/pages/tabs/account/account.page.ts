import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  pedidos: any[] = [] 
  isLoading: boolean = false

  model: any = {
    icon:'fast-food-outline',
    title: 'Você ainda não realizou nenhum pedido!'
  }    

  constructor() { }

  ngOnInit() {

    this.isLoading = true       

    setTimeout(()=>{
      this.pedidos = [
        {
          name: 'Dom Henrique',
          cover: 'assets/imgs/img1.jpeg',
          address: 'Guarapuava',
          price: '70',
          items: 'Hamburguer, Batata frita, Refrigerante',
          date: 'Janeiro 29, 2024 - 19:30'
        },
        {
          name: 'Max pizzaria',
          cover: 'assets/imgs/pizza.jpeg',
          address: 'Guarapuava',
          price: '100',
          items: 'Pizza Grande, Refrigerante',
          date: 'Janeiro 15, 2024 - 20:12'
        },
        {
          name: 'Carnivora',
          cover: 'assets/imgs/carne.jpeg',
          address: 'Guarapuava',
          price: '120',
          items: 'Arroz, Picanha',
          date: 'Janeiro 9, 2024 - 21:00'
        }
      ]
      this.isLoading = false
    }, 1000)
  }

}
