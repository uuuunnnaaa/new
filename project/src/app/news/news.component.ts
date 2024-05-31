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

currentCategory: string | null = null;


Picture = [
  {category:'menu',img:'../assets/food1.jpg',title:'[豪華海陸定食]'},
  {category:'menu',img:'../assets/food2.jpg',title:'[蒲燒鰻魚飯定食]'},
  {category:'menu',img:'../assets/food3.jpg',title:'[炸半雞定食]'},
  {category:'menu',img:'../assets/food4.jpg',title:'[起司豬排定食]'},
  {category:'news',img:'../assets/news1.jpg',title:'【季節限定】夏日定食'},
  {category:'news',img:'../assets/news2.jpg',title:'2024樹太老母親節'},
  {category:'news',img:'../assets/news7.jpg',title:'[會員福利社]'},
  {category:'news',img:'../assets/news8.jpg',title:'【歡慶開幕】'},

]
picture2 =[
  {category:'menu',img:'../assets/food5.jpg',title:'[炸里肌肉豬排定食]'},
  {category:'menu',img:'../assets/food6.jpg',title:'[炸腰內肉豬排定食]'},
  {category:'menu',img:'../assets/food7.jpg',title:'[豬肉壽喜蓋飯定食]'},
  {category:'menu',img:'../assets/food8.jpg',title:'[烤鯖魚定食]'},
  {category:'news',img:'../assets/news3.jpg',title:'[填問券抽好禮]'},
  {category:'news',img:'../assets/news4.jpg',title:'【店休公告】暫不營業'},
  {category:'news',img:'../assets/news5.jpg',title:'[填問券抽好禮]'},
  {category:'news',img:'../assets/news6.jpg',title:'[🍊龍年吉祥 大吉大利送紅包🍊]'},
]

updateCategory(category: string | null): void {
  this.currentCategory = category;
}


}
