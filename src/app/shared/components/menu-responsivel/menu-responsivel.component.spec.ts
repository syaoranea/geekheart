import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuResponsivelComponent } from './menu-responsivel.component';

describe('MenuResponsivelComponent', () => {
  let component: MenuResponsivelComponent;
  let fixture: ComponentFixture<MenuResponsivelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuResponsivelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuResponsivelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
