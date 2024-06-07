import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemMahasiswaPageRoutingModule } from './item-mahasiswa-routing.module';

import { ItemMahasiswaPage } from './item-mahasiswa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemMahasiswaPageRoutingModule,
  ],
  declarations: [ItemMahasiswaPage],
})
export class ItemMahasiswaPageModule {}
