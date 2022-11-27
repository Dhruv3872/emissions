import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectGasComponent } from './select-gas.component';

describe('SelectGasComponent', () => {
  let component: SelectGasComponent;
  let fixture: ComponentFixture<SelectGasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectGasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectGasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
