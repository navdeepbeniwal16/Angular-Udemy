import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndviewComponent } from './endview.component';

describe('EndviewComponent', () => {
  let component: EndviewComponent;
  let fixture: ComponentFixture<EndviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
