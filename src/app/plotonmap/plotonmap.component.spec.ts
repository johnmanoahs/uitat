import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotonmapComponent } from './plotonmap.component';

describe('PlotonmapComponent', () => {
  let component: PlotonmapComponent;
  let fixture: ComponentFixture<PlotonmapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlotonmapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlotonmapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
