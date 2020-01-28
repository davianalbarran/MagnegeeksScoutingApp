import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TeamComponent } from './team/team.component';
import { RankingsComponent } from './rankings/rankings.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'teams', component: TeamComponent},
  {path: 'rankings', component: RankingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
