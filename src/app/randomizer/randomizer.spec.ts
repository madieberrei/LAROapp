import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomizerComponent } from './randomizer.component';

describe('RandomizerComponent', () => {
  let component: RandomizerComponent;
  let fixture: ComponentFixture<RandomizerComponent>;

  it('should contain WSURPRISE in a button tag', async(() => {
    const fixture = TestBed.createComponent(RandomizerComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('button').textContent).toContain(`SURPRISE`);
  }));
});