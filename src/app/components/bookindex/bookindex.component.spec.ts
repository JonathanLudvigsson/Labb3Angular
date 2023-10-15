import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookindexComponent } from './bookindex.component';

describe('BookindexComponent', () => {
  let component: BookindexComponent;
  let fixture: ComponentFixture<BookindexComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookindexComponent]
    });
    fixture = TestBed.createComponent(BookindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
