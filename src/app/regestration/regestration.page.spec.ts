import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RegestrationPage } from './regestration.page';

describe('RegestrationPage', () => {
  let component: RegestrationPage;
  let fixture: ComponentFixture<RegestrationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegestrationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RegestrationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
