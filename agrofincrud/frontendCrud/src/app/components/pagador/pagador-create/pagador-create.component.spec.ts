import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagadorCreateComponent } from './pagador-create.component';

describe('PagadorCreateComponent', () => {
  let component: PagadorCreateComponent;
  let fixture: ComponentFixture<PagadorCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagadorCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagadorCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
