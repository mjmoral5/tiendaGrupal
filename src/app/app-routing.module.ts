import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductItemComponent } from './component/product-item/product-item.component';
import { ListaProductosComponent } from './pages/lista-productos/lista-productos.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'productos', component: ListaProductosComponent },
  { path: 'producto/:id', component: ProductItemComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
