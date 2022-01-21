import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagadorReadComponent } from './pagador-read.component';

describe('PagadorReadComponent', () => {
  let component: PagadorReadComponent;
  let fixture: ComponentFixture<PagadorReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagadorReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagadorReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
