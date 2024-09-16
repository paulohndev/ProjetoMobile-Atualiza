import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Noticia3Page } from './noticia3.page';

describe('Noticia3Page', () => {
  let component: Noticia3Page;
  let fixture: ComponentFixture<Noticia3Page>;

  beforeEach(() => {
    fixture = TestBed.createComponent(Noticia3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
