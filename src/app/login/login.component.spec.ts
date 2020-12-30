import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppRoutingModule } from '../app-routing.module';
import { LoginComponent } from './login.component';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent],
      providers:[HttpClientModule],
      imports: [
        FormsModule,
        HttpClientModule,
        AppRoutingModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});