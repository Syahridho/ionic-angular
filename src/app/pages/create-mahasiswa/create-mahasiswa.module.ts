import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreateMahasiswaPageRoutingModule } from './create-mahasiswa-routing.module';

import { CreateMahasiswaPage } from './create-mahasiswa.page';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    IonicModule,
    CreateMahasiswaPageRoutingModule,
  ],
  declarations: [CreateMahasiswaPage],
})
export class CreateMahasiswaPageModule {}
