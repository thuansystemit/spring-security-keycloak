import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelloworkComponent } from './features/hellowork/hellowork.component';
import { AuthGuard } from './guard/auth.guard';

const routes: Routes = [
  { path: '', component: HelloworkComponent , canActivate: [AuthGuard]},
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
