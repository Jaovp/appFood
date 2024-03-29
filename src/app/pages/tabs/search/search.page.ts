import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  @ViewChild('searchInput') sInput;
  allRestaurants: any[] = [];
  restaurants: any[] = [];
  query: any;
  isLoading: boolean = false;
  model: any = {
    icon: 'search-outline',
    title: 'Nenhum restaurante encontrado',
    subtitle: 'Tente buscar por outro nome ou endereço'
  }

  constructor() {
    setTimeout(() => {
      this.sInput.setFocus();
    },500);
   }

  ngOnInit() {
    this.allRestaurants = [
      {
        uid: 'dh',
        cover: 'assets/imgs/img1.jpeg',
        name: 'Dom Henrique',
        short_name: 'domhenrique',
        cuisines:[
          'Almoço',
          'Café',
          'Hamburguer'
        ],
        rating: 5,
        delivery_time: 25,
        distance: 2.5,
        price: 100
      },
      {
        uid: 'mp',
        cover: 'assets/imgs/pizza.jpeg',
        name: 'Max Pizzaria',
        short_name: 'maxpizzaria',
        cuisines:[
          'Pizza',
          'Bebidas'
        ],
        rating: 5,
        delivery_time: 60,
        distance: 1.9,
        price: 80
      },
      {
        uid: 'car',
        cover: 'assets/imgs/carne.jpeg',
        name: 'Carnívora',
        short_name: 'carnivora',
        cuisines:[
          'Almoço',
          'jantar',
          'Hamburguer',
          'Bebidas',
        ],
        rating: 5,
        delivery_time: 40,
        distance: 2.1,
        price: 100
      },
    ];
  }

  async onSearchChange(event){
    this.query = event.detail.value.toLowerCase();
    this.restaurants = [];
    if(this.query.length > 0){
      this.isLoading = true;
      setTimeout(async() => {
        this.restaurants = await this.allRestaurants.filter((element: any) =>
         { return element.short_name.includes(this.query)})
         console.log(this.restaurants);
         this.isLoading = false;
         //this.query = null;
      },2000);
    }
  }

}
