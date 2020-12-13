import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopUpService {

  constructor() { }

  makeCapitalPopup(data: any): string {
    return `` +
      `<div>Id: ${ data.id }</div>` +
      `<div>State: ${ data.state }</div>` +
      `<div>City: ${ data.city}</div>` +
      `<div>Severiry: ${data.severity}</div>` +
      `<div>Start Time: ${data.startTime}</div>` +
      `<div>End Time: ${data.endTime}</div>` +
      `<div>TMC: ${data.tmc}</div>` +
      `<div>Source: ${data.source}</div>` +
      `<div>Description: ${data.description}</div>` +
      `<div>Street: ${data.street}</div>`


  }
}
