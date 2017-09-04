import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampEditorComponent } from './camp-editor.component';

describe('CampEditorComponent', () => {
  let component: CampEditorComponent;
  let fixture: ComponentFixture<CampEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
