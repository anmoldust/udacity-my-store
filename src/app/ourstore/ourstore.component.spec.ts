import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurstoreComponent } from './ourstore.component';

describe('OurstoreComponent', () => {
  let component: OurstoreComponent;
  let fixture: ComponentFixture<OurstoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurstoreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OurstoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
