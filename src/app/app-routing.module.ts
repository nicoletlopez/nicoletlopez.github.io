import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: "",
    loadChildren: () => import('./modules/portfolio/portfolio.module').then(m => m.PortfolioModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy', anchorScrolling: 'enabled' }),],
  exports: [RouterModule,],
})
export class AppRoutingModule { }
