import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilialFormComponent } from './filial-form.component';

describe('FilialFormComponent', () => {
  let component: FilialFormComponent;
  let fixture: ComponentFixture<FilialFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilialFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilialFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
