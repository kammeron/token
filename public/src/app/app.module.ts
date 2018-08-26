import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpService } from './http.service';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AngularDraggableModule } from 'angular2-draggable';
import { BoardsComponent } from './boards/boards.component';
import { NewpostComponent } from './newpost/newpost.component';
import { MessageComponent } from './message/message.component';
import { FilesComponent } from './files/files.component';
import { DrawComponent } from './files/draw/draw.component';
import { OddsComponent } from './files/odds/odds.component';
import { PostComponent } from './boards/post/post.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    BoardsComponent,
    NewpostComponent,
    MessageComponent,
    FilesComponent,
    DrawComponent,
    OddsComponent,
    PostComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    AngularDraggableModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
