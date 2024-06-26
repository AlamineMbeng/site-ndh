import { Component } from '@angular/core';
import {HeaderComponent} from "../header/header.component";
import {FooterComponent} from "../footer/footer.component";
import {ProgramComponent} from "../program/program.component";
import {SponsorsComponent} from "../sponsors/sponsors.component";
import {AboutComponent} from "../about/about.component";
import {NavbarComponent} from "../navbar/navbar.component";
import {PartenaireComponent} from "../partenaire/partenaire.component";
import {TeamComponent} from "../team/team.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    ProgramComponent,
    SponsorsComponent,
    AboutComponent,
    NavbarComponent,
    PartenaireComponent,
    TeamComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
