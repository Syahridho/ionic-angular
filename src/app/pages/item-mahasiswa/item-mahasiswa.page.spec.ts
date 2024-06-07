import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemMahasiswaPage } from './item-mahasiswa.page';

describe('ItemMahasiswaPage', () => {
  let component: ItemMahasiswaPage;
  let fixture: ComponentFixture<ItemMahasiswaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemMahasiswaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
