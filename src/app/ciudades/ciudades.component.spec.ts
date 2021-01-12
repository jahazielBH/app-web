import { ComponentFixture, TestBed } from '@angular/core/testing';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';
import { CiudadesComponent } from './ciudades.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule} from '@angular/common/http';
import { GraphQLModule } from '../graphql.module';
import { FormsModule } from '@angular/forms';
import { NgxSpinnerModule } from "ngx-spinner";
describe('CiudadesComponent', () => {
  let component: CiudadesComponent;
  let fixture: ComponentFixture<CiudadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CiudadesComponent ],
      imports: [HttpClientModule, NgxPaginationModule, GraphQLModule, FormsModule, NgxSpinnerModule],
      providers: [ HttpClientModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CiudadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
