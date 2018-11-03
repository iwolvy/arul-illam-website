import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrewListSliderComponent } from './crew-list-slider.component';

describe('CrewListSliderComponent', () => {
  let component: CrewListSliderComponent;
  let fixture: ComponentFixture<CrewListSliderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrewListSliderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrewListSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
