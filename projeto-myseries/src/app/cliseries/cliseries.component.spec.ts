import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CliseriesComponent } from './cliseries.component';

describe('CliseriesComponent', () => {
  let component: CliseriesComponent;
  let fixture: ComponentFixture<CliseriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CliseriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CliseriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
