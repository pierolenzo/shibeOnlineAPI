
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryComponent } from './components/gallery/gallery.component';

const routes: Routes = [
  { path: '',
    children: [
      { path: ':typeAnimal/:numberPhoto', component: GalleryComponent },
    ]},
]

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class GalleryRoutingModule {}
