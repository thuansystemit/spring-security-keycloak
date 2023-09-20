import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelloworkComponent } from './hellowork.component';

describe('HelloworkComponent', () => {
  let component: HelloworkComponent;
  let fixture: ComponentFixture<HelloworkComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HelloworkComponent]
    });
    fixture = TestBed.createComponent(HelloworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
