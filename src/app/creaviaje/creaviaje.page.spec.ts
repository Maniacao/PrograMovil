import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CreaviajePage } from './creaviaje.page';

describe('CreaviajePage', () => {
  let component: CreaviajePage;
  let fixture: ComponentFixture<CreaviajePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CreaviajePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
