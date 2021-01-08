import { Component, OnInit } from '@angular/core';
import {Apollo} from 'apollo-angular';
import gql from 'graphql-tag';

const GET_CIUDADES = gql`
  {
    ciudades {
      id
      ciudad
      pais
      codigoPostal
      numeroAccidentes
    }
  }
`;

@Component({
  selector: 'app-ciudades',
  templateUrl: './ciudades.component.html',
  styleUrls: ['./ciudades.component.scss']
})
export class CiudadesComponent implements OnInit {
  ciudades: any[];
  loading = true;
  error: any;
  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.apollo
      .watchQuery({
        query: GET_CIUDADES
      }).valueChanges.subscribe( (result:any) => {
        this.ciudades = result.data && result.data.ciudades;
        this.loading = result.loading;
        this.error = result.error;
      });
  
  }

}