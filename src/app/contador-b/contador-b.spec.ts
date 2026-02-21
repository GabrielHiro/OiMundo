import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContadorB } from './contador-b';

describe('ContadorB', () => {
  let component: ContadorB;
  let fixture: ComponentFixture<ContadorB>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContadorB]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContadorB);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
