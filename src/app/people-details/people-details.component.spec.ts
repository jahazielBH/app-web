import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule} from '@angular/common/http';
import { PeopleDetailsComponent } from './people-details.component';
import { PeopleListComponent } from '../people-list/people-list.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing.module';

describe('PeopleDetailsComponent', () => {
  let component: PeopleDetailsComponent;
  let fixture: ComponentFixture<PeopleDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeopleDetailsComponent ],
      imports: [ HttpClientModule, FormsModule, AppRoutingModule],
      providers: [ HttpClientModule, PeopleListComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
