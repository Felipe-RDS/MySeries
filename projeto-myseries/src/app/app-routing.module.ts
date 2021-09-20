import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'header',
  },
  {
    path: 'header',
    component: HeaderComponent
  }
];

const routerOptions: ExtraOptions = {
  useHash: true,
  scrollPositionRestoration: 'enabled' ,
  anchorScrolling: 'enabled' ,
 // scrollOffset: [0, 64],
};

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
