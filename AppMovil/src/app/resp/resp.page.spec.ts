import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RespPage } from './resp.page';

describe('RespPage', () => {
  let component: RespPage;
  let fixture: ComponentFixture<RespPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RespPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RespPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
