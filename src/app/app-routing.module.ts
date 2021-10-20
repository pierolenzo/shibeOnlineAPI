import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'gallery',
    loadChildren: () => import('./modules/gallery/gallery.module').then(m => m.GalleryModule)
  },
  { path: '', pathMatch: 'full', redirectTo: '/gallery' },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
