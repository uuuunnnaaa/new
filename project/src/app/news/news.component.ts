import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { title } from 'process';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [RouterLink,CommonModule,RouterOutlet],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})
export class NewsComponent {

Picture = [
  {img:'../assets/food1.jpg',title:'[豪華海陸定食]'},
  {img:'../assets/food2.jpg',title:'[蒲燒鰻魚飯定食]'},
  {img:'../assets/food3.jpg',title:'[炸半雞定食]'},
  {img:'../assets/food4.jpg',title:'[起司豬排定食]'},

]
picture2 =[
  {img:'../assets/food5.jpg',title:'[炸里肌肉豬排定食]'},
  {img:'../assets/food6.jpg',title:'[炸腰內肉豬排定食]'},
  {img:'../assets/food7.jpg',title:'[豬肉壽喜蓋飯定食]'},
  {img:'../assets/food8.jpg',title:'[烤鯖魚定食]'},
]
}
