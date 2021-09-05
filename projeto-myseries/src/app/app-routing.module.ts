import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

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
