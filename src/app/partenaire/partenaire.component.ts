import {Component, OnInit} from '@angular/core';
import {CarouselModule} from "primeng/carousel";

@Component({
  selector: 'app-partenaire',
  standalone: true,
  imports: [
    CarouselModule
  ],
  templateUrl: './partenaire.component.html',
  styleUrl: './partenaire.component.css'
})
export class PartenaireComponent implements OnInit{

  images = [
    { src: 'assets/img/team/1.jpg', alt: 'Actualité 1', title: 'Issa Diedhiou', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad' },
    { src: 'assets/img/team/2.jpg', alt: 'Actualité 2', title: 'Marietou Diedhiou', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad' },
    { src: 'assets/img/team/3.jpg', alt: 'Actualité 3', title: 'Djibril Fall', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad' },
    { src: 'assets/img/team/1.jpg', alt: 'Actualité 3', title: 'Al Amine MBENGUE', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad' },
    { src: 'assets/img/team/3.jpg', alt: 'Actualité 3', title: 'Issa Diedhiou', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad' },
];

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 2
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1
    }
  ];

  ngOnInit() {
  }

}
