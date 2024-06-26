import { Component } from '@angular/core';
import {HeaderComponent} from "../header/header.component";
import {CardModule} from "primeng/card";

@Component({
  selector: 'app-sponsors',
  standalone: true,
  imports: [
    HeaderComponent,
    CardModule
  ],
  templateUrl: './sponsors.component.html',
  styleUrl: './sponsors.component.css'
})
export class SponsorsComponent {

}
