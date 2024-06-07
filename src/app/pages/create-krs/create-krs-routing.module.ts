import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateKrsPage } from './create-krs.page';

const routes: Routes = [
  {
    path: '',
    component: CreateKrsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateKrsPageRoutingModule {}
