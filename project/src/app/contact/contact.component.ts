import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [RouterLink,CommonModule,RouterOutlet],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  Contact =[
    {img:'../assets/phone-call.png',title:'連絡電話',content:'000-000-000'},
    {img:'../assets/g-mail.jpg',title:'電子信箱',content:'xxx@xxxxxxxxxxx'},
    {img:'../assets/home-page.png',title:'聯絡地址',content:'xxxxxxxxxxxxx'},
  ]
  banner = '../assets/banner.png'
  LOGO = '../assets/logo2.png'
}
