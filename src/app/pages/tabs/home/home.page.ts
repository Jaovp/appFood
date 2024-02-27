import { Component, OnInit } from '@angular/core';
import { IonicSlides } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  swiperModules = [IonicSlides];
  banners: any[] = [];
  restaurants: any[] = [];
  isLoading: boolean = true;

  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = true;
      this.banners = [
        {banner: 'assets/imgs/img1.jpeg'},
        {banner: 'assets/imgs/img2.jpeg'},
        {banner: 'assets/imgs/img3.jpeg'},
      ],
      this.restaurants = [
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
      this.isLoading = false;
    },2000);

  }

}