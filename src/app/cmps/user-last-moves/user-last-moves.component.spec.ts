import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLastMovesComponent } from './user-last-moves.component';

describe('UserLastMovesComponent', () => {
  let component: UserLastMovesComponent;
  let fixture: ComponentFixture<UserLastMovesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserLastMovesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserLastMovesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
