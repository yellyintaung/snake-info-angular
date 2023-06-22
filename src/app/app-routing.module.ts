import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SnakeComponent } from './snake/snake.component';
import { SnakeDetailComponent } from './snake-detail/snake-detail.component';

const routes: Routes = [
  {path:'', component:SnakeComponent},
  {path:'snake', component:SnakeComponent},
  
  {path:'snake/snake_detail/:id', component:SnakeDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
