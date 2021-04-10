import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokelistComponent } from './pokelist/pokelist.component';

const routes: Routes = [
  {path: 'list',component:PokelistComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
