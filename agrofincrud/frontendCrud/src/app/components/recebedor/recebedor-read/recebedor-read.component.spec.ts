import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecebedorReadComponent } from './recebedor-read.component';

describe('RecebedorReadComponent', () => {
  let component: RecebedorReadComponent;
  let fixture: ComponentFixture<RecebedorReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecebedorReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecebedorReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
