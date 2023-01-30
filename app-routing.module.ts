import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes = [
  { path: 'products',
    loadChildren: () => import('./product/product.routing').then(x => x.ProductRoutingModule)},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { 
  constructor(){
    console.log('approuting Module loaded');
    
  }
}
