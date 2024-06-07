import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateDosenPage } from './create-dosen.page';

describe('CreateDosenPage', () => {
  let component: CreateDosenPage;
  let fixture: ComponentFixture<CreateDosenPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDosenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
