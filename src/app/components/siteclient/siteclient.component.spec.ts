import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteclientComponent } from './siteclient.component';

describe('SiteclientComponent', () => {
  let component: SiteclientComponent;
  let fixture: ComponentFixture<SiteclientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SiteclientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
