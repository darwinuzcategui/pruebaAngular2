import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisesEjemploHttpComponent } from './paises-ejemplo-http.component';

describe('PaisesEjemploHttpComponent', () => {
  let component: PaisesEjemploHttpComponent;
  let fixture: ComponentFixture<PaisesEjemploHttpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaisesEjemploHttpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaisesEjemploHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
