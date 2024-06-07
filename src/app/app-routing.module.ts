import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('./pages/signup/signup.module').then((m) => m.SignupPageModule),
  },
  {
    path: 'landing',
    loadChildren: () =>
      import('./pages/landing/landing.module').then((m) => m.LandingPageModule),
  },
  {
    path: 'reset-password',
    loadChildren: () =>
      import('./pages/reset-password/reset-password.module').then(
        (m) => m.ResetPasswordPageModule
      ),
  },
  {
    path: 'menu',
    loadChildren: () =>
      import('./pages/menu/menu.module').then((m) => m.MenuPageModule),
  },
  {
    path: 'create-mahasiswa',
    loadChildren: () =>
      import('./pages/create-mahasiswa/create-mahasiswa.module').then(
        (m) => m.CreateMahasiswaPageModule
      ),
  },
  {
    path: 'create-dosen',
    loadChildren: () =>
      import('./pages/create-dosen/create-dosen.module').then(
        (m) => m.CreateDosenPageModule
      ),
  },
  {
    path: 'create-krs',
    loadChildren: () =>
      import('./pages/create-krs/create-krs.module').then(
        (m) => m.CreateKrsPageModule
      ),
  },
  {
    path: 'create-matkul',
    loadChildren: () =>
      import('./pages/create-matkul/create-matkul.module').then(
        (m) => m.CreateMatkulPageModule
      ),
  },
  {
    path: 'edit-mahasiswa/:id',
    loadChildren: () =>
      import('./pages/edit-mahasiswa/edit-mahasiswa.module').then(
        (m) => m.EditMahasiswaPageModule
      ),
  },
  {
    path: 'item-mahasiswa',
    loadChildren: () =>
      import('./pages/item-mahasiswa/item-mahasiswa.module').then(
        (m) => m.ItemMahasiswaPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
