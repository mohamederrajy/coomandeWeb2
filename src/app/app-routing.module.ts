import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CommandeComponent} from './commande/commande.component';
import {CommandeitemsComponent} from './commandeitems/commandeitems.component';
import {EditCommandComponent} from './edit-command/edit-command.component';

const routes: Routes = [

  {path:'commande',component:CommandeComponent},
  {path:'addnew', component:CommandeitemsComponent},
  {path:'edite/:id', component:EditCommandComponent},

  { path: '', pathMatch: 'full', redirectTo: '/welcome' },


  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
