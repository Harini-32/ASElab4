import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EmotiondetectionPage} from './emotiondetection.page';

describe('EmotiondetectionPage', () => {
  let component: EmotiondetectionPage;
  let fixture: ComponentFixture<EmotiondetectionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmotiondetectionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EmotiondetectionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
