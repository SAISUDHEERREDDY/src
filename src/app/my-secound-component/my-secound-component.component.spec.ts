import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MySecoundComponentComponent } from './my-secound-component.component';

describe('MySecoundComponentComponent', () => {
  let component: MySecoundComponentComponent;
  let fixture: ComponentFixture<MySecoundComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MySecoundComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MySecoundComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
