import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateMatkulPage } from './create-matkul.page';

describe('CreateMatkulPage', () => {
  let component: CreateMatkulPage;
  let fixture: ComponentFixture<CreateMatkulPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMatkulPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
