import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule} from '@angular/common/http';
import { CreatePeopleComponent } from './create-people.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { NgxSpinnerModule } from "ngx-spinner";

describe('CreatePeopleComponent', () => {
  let component: CreatePeopleComponent;
  let fixture: ComponentFixture<CreatePeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePeopleComponent ],
      imports: [ HttpClientModule, FormsModule, AppRoutingModule, NgxSpinnerModule],
      providers: [ HttpClientModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
