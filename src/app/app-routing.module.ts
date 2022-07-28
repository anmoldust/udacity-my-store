import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemComponent } from './item/item.component';
import { OurstoreComponent } from './ourstore/ourstore.component';
const routes: Routes = [
{path : '', redirectTo : 'item' , pathMatch : 'full'},
{path : 'item' , component : ItemComponent},
{path : 'ourstore' , component : OurstoreComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
