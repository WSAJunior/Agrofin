import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecebedorCreateComponent } from './recebedor-create.component';

describe('RecebedorCreateComponent', () => {
  let component: RecebedorCreateComponent;
  let fixture: ComponentFixture<RecebedorCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecebedorCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecebedorCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
