import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingComponent } from './landing.component';

describe('landingComponent', () => {
  let component: LandingComponent;
  let fixture: ComponentFixture<LandingComponent>;



  it('should contain Welcome in an h1 tag', async(() => {
    const fixture = TestBed.createComponent(LandingComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain(`Welcome`);
  }));
});