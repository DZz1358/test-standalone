import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './components/default/default.component';
import { StandaloneComponent } from './components/standalone/standalone.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [

  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'default',
    component: DefaultComponent,
  },
  {
    path: 'standalone',
    component: StandaloneComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
