import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConteudoNovoComponent } from './conteudo-novo.component';

describe('ConteudoNovoComponent', () => {
  let component: ConteudoNovoComponent;
  let fixture: ComponentFixture<ConteudoNovoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConteudoNovoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConteudoNovoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
