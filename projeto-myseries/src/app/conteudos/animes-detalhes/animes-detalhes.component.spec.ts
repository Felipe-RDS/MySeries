import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimesDetalhesComponent } from './animes-detalhes.component';

describe('AnimesDetalhesComponent', () => {
  let component: AnimesDetalhesComponent;
  let fixture: ComponentFixture<AnimesDetalhesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimesDetalhesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnimesDetalhesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
