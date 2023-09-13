import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ListaTodosComponent } from './components/lista-todos/lista-todos.component';
import { FooterComponent } from './components/footer/footer.component';
import { EditarTodoComponent } from './components/editar-todo/editar-todo.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, ListaTodosComponent, FooterComponent, EditarTodoComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
