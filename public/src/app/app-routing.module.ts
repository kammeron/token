import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// route componenets
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { BoardsComponent } from './boards/boards.component';
import { NewpostComponent } from './newpost/newpost.component';
import { MessageComponent } from './message/message.component';
import { FilesComponent } from './files/files.component';
import { DrawComponent } from './files/draw/draw.component';
import { OddsComponent } from './files/odds/odds.component';
import { PostComponent } from './boards/post/post.component';

const routes: Routes = [
    { path: 'register', component: RegisterComponent },
    { path: 'login', component: LoginComponent },
    { path: 'boards', component: BoardsComponent, children: [
      { path: 'post/:id', component: PostComponent }]
    },
    { path: 'newpost', component: NewpostComponent },
    { path: 'messages', component: MessageComponent },
    { path: 'files', component: FilesComponent, children: [
    	{ path: 'draw', component: DrawComponent},
    	{ path: 'odds', component: OddsComponent}]
	  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
