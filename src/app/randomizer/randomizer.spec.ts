import { ComponentFixture, TestBed } from '@angular/core/testing';

import { randomizerComponent } from './randomizer.component';

describe('randomizerComponent', () => {
  let component: 'randomizerComponent';
  let fixture: ComponentFixture<'randomizerComponent'>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 'randomizerComponent' ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent('randomizerComponent');
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});