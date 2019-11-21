import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PhotoListComponent} from './photo-list/photo-list.component';
import {PhotoCreateComponent} from './photo-create/photo-create.component';
import {PhotoEditComponent} from './photo-edit/photo-edit.component';
import {PhotoDeleteComponent} from './photo-delete/photo-delete.component';
import {PhotoDetailComponent} from './photo-detail/photo-detail.component';


const routes: Routes = [
  { path: 'list-photo', component: PhotoListComponent
},
  { path: 'photo-create', component: PhotoCreateComponent
  },
  { path: 'list-photo/edit-photo/:id', component: PhotoEditComponent
  },
  { path: 'list-photo/delete-photo/:id', component: PhotoDeleteComponent
  },
  { path: 'list-photo/detail-photo/:id', component: PhotoDetailComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
