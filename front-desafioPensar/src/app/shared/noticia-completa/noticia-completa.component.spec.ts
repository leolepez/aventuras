import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiaCompletaComponent } from './noticia-completa.component';

describe('NoticiaCompletaComponent', () => {
  let component: NoticiaCompletaComponent;
  let fixture: ComponentFixture<NoticiaCompletaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticiaCompletaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticiaCompletaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
