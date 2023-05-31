import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProductItemComponent } from './component/product-item/product-item.component';
import { ListaProductosComponent } from './pages/lista-productos/lista-productos.component';
import { ListaUsuariosComponent } from './pages/lista-usuarios/lista-usuarios.component';
import { DetalleUsuarioComponent } from './pages/detalle-usuario/detalle-usuario.component';
import { LoginComponent } from './pages/login/login.component';
import { EditUserComponent } from './pages/edit-user/edit-user.component';
import { DeleteUserComponent } from './pages/delete-user/delete-user.component';
import { AddUserComponent } from './pages/add-user/add-user.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'productos', component: ListaProductosComponent },
  { path: 'producto/:id', component: ProductItemComponent },
  { path: 'usuarios', component: ListaUsuariosComponent },
  { path: 'usuarios/add', component: AddUserComponent },
  { path: 'usuario/:id', component: DetalleUsuarioComponent },
  { path: 'usuarios/edit/:id', component: EditUserComponent },
  { path: 'usuarios/delete/:id', component: DeleteUserComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
