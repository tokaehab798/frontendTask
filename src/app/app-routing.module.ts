import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgramsComponent } from './components/programs/programs.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

const routes: Routes = [
  { path: '', redirectTo: 'programs', pathMatch: 'full' },
  {path:'programs', component:ProgramsComponent, title:'programsPage'},
  { path: '**', component:NotfoundComponent,title:'NotFoundPage' }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
