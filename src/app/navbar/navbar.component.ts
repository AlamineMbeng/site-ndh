import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{

  ngOnInit() {
  }

  ngInscrit(){
    alert("L'inscription pas encore disponible")
  }

}
