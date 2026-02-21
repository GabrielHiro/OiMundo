import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContadorA } from './contador-a';

describe('ContadorA', () => {
  let component: ContadorA;
  let fixture: ComponentFixture<ContadorA>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContadorA]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContadorA);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
