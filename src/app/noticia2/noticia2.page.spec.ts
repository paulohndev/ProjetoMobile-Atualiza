import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Noticia2Page } from './noticia2.page';
import { HttpClientTestingModule } from '@angular/common/http/testing'; // Importar para testes

describe('Noticia2Page', () => {
  let component: Noticia2Page;
  let fixture: ComponentFixture<Noticia2Page>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Noticia2Page],
      imports: [HttpClientTestingModule] // Importar para testes
    }).compileComponents();

    fixture = TestBed.createComponent(Noticia2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
