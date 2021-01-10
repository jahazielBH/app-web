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

const CREATE_CIUDAD = gql`
  mutation($ciudad: String!, $codigoPostal: String!, $numeroAccidentes: String!, $pais: String! ){
    createLink (ciudad: $ciudad, codigoPostal: $codigoPostal, numeroAccidentes: $numeroAccidentes, pais: $pais){
      id,
      ciudad,
      codigoPostal,
      numeroAccidentes,
      pais
    }
  }
`;

type Ciudad = {
  id?: number;
  ciudad?: string;
  codigoPostal?: String;
  numeroAccidentes?: String;
  pais?: String;
}

@Component({
  selector: 'app-ciudades',
  templateUrl: './ciudades.component.html',
  styleUrls: ['./ciudades.component.scss']
})
export class CiudadesComponent implements OnInit {
  ciudades: any[];
  loading = true;
  error: any;
  createdCiudad: Ciudad;
  ciudad: string = '';
  codigoPostal: string = '';
  numeroAccidentes: string = '';
  pais: string = '';
  pageActual: number = 1;

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

  createCiudad(){
		this.apollo.mutate({
		  mutation: CREATE_CIUDAD,
		  variables: {ciudad: this.ciudad, codigoPostal: this.codigoPostal, numeroAccidentes: this.numeroAccidentes, pais: this.pais}
		}).subscribe(result => {
		  this.createdCiudad = result.data['createLink'];
      console.log('New Ciudad: ' + this.createdCiudad.id + ' -> ' + this.createdCiudad.ciudad 
      + ' -> ' + this.createdCiudad.codigoPostal + ' -> ' + this.createdCiudad.numeroAccidentes
      + ' -> ' + this.createdCiudad.pais);
		})
	}
}