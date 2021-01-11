import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule} from '@angular/common/http';
import { SearchPeopleComponent } from './search-people.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';
import { NgxSpinnerModule } from "ngx-spinner";

describe('SearchPeopleComponent', () => {
  let component: SearchPeopleComponent;
  let fixture: ComponentFixture<SearchPeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchPeopleComponent ],
      imports: [ HttpClientModule, FormsModule, AppRoutingModule, NgxSpinnerModule],
      providers: [ HttpClientModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
