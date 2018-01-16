import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutVideoComponentComponent } from './about-video-component.component';

describe('AboutVideoComponentComponent', () => {
  let component: AboutVideoComponentComponent;
  let fixture: ComponentFixture<AboutVideoComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutVideoComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutVideoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
