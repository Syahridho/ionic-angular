import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemMahasiswaPage } from './item-mahasiswa.page';

const routes: Routes = [
  {
    path: '',
    component: ItemMahasiswaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemMahasiswaPageRoutingModule {}
