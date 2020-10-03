import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {CdkStepperModule} from '@angular/cdk/stepper';
import {CdkTableModule} from '@angular/cdk/table';
import {CdkTreeModule} from '@angular/cdk/tree';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { PostsComponent } from './posts/posts.component';
import { GalleryComponent } from './gallery/gallery.component';
import { TodoComponent } from './todo/todo.component';
import { ProfilePageComponent } from './profile-page/profile-page.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersService } from './services/users.service';

// const appRoutes: Routes=[
//   { path: '', component: HomeComponent}, 
//   { path: 'profile-page', component: ProfilePageComponent},
//   { path: '*', component: HomeComponent},  
// ];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    PostsComponent,
    GalleryComponent,
    TodoComponent,
    ProfilePageComponent
  ],
  imports: [
    BrowserModule,
    CdkStepperModule,
    CdkTableModule,
    CdkTreeModule,
    HttpClientModule,
    ScrollingModule,
  ],
  exports:[
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  
}
