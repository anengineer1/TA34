import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComponentCalculatorComponent } from './my-component-calculator.component';

describe('MyComponentCalculatorComponent', () => {
  let component: MyComponentCalculatorComponent;
  let fixture: ComponentFixture<MyComponentCalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyComponentCalculatorComponent]
    });
    fixture = TestBed.createComponent(MyComponentCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
