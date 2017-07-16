import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardBodyComponent } from './wizard-body.component';

describe('WizardBodyComponent', () => {
  let component: WizardBodyComponent;
  let fixture: ComponentFixture<WizardBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WizardBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
