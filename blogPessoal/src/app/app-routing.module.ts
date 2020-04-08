import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FeedComponent } from './feed/feed.component';


const routes: Routes = [
  {path: '', redirectTo: 'home',pathMatch: 'full'}, //pathMatch faz com que traga todo componente que existe na pagina
  {path: 'home', component: HomeComponent},
  {path: 'feed', component: FeedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
