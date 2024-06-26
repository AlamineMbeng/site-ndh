import { Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {SponsorsComponent} from "./sponsors/sponsors.component";
import {InscriptionComponent} from "./inscription/inscription.component";
import {AProposComponent} from "./a-propos/a-propos.component";
import {InfosComponent} from "./infos/infos.component";
import {AmbassadeurComponent} from "./ambassadeur/ambassadeur.component";
import {PartenairesComponent} from "./partenaires/partenaires.component";

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sponsors', component: SponsorsComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'a-propos', component: AProposComponent },
  { path: 'infos', component: InfosComponent },
  { path: 'partenaires', component: PartenairesComponent },
];
