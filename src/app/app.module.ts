import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { SearchComponent } from './component/search/search.component';
import { CarrouselComponent } from './component/carrousel/carrousel.component';
import { ProductItemComponent } from './component/product-item/product-item.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { ListaProductosComponent } from './pages/lista-productos/lista-productos.component';
import { LoginComponent } from './pages/login/login.component';
import { ListaUsuariosComponent } from './pages/lista-usuarios/lista-usuarios.component';
import { DetalleUsuarioComponent } from './pages/detalle-usuario/detalle-usuario.component';
import { AddUserComponent } from './pages/add-user/add-user.component';
import { EditUserComponent } from './pages/edit-user/edit-user.component';
import { DeleteUserComponent } from './pages/delete-user/delete-user.component';
import { PersonaServiceService } from './services/persona-service.service';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SearchComponent,
    CarrouselComponent,
    ProductItemComponent,
    FooterComponent,
    HomeComponent,
    ListaProductosComponent,
    LoginComponent,
    ListaUsuariosComponent,
    DetalleUsuarioComponent,
    AddUserComponent,
    EditUserComponent,
    DeleteUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [PersonaServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
