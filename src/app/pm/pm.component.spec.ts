import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { PmComponent } from './pm.component';

describe('PmComponent', () => {
  let component: PmComponent;
  let fixture: ComponentFixture<PmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PmComponent ],
      imports: [ HttpClientModule],
      providers: [ HttpClientModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
