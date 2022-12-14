import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChanelsComponent } from './chanels.component';

describe('ChanelsComponent', () => {
  let component: ChanelsComponent;
  let fixture: ComponentFixture<ChanelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChanelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChanelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
