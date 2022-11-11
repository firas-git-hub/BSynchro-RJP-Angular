import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageActionCardComponent } from './page-action-card.component';

describe('PageActionCardComponent', () => {
  let component: PageActionCardComponent;
  let fixture: ComponentFixture<PageActionCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageActionCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageActionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
