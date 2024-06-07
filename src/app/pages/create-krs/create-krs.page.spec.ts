import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreateKrsPage } from './create-krs.page';

describe('CreateKrsPage', () => {
  let component: CreateKrsPage;
  let fixture: ComponentFixture<CreateKrsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateKrsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
