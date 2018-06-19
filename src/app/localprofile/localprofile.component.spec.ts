import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalprofileComponent } from './localprofile.component';

describe('LocalprofileComponent', () => {
  let component: LocalprofileComponent;
  let fixture: ComponentFixture<LocalprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
