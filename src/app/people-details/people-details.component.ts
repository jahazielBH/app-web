import { Component, OnInit, Input } from '@angular/core';
import { RedisService } from '../redis/redis.service';
import { PersonI } from '../model/person/person';
import { PeopleListComponent } from '../people-list/people-list.component';

@Component({
  selector: 'app-people-details',
  templateUrl: './people-details.component.html',
  styleUrls: ['./people-details.component.scss']
})
export class PeopleDetailsComponent implements OnInit {

  @Input() person: PersonI;
  constructor(
    private redisService: RedisService, 
    private listComponent: PeopleListComponent) { }

  ngOnInit() {
  }

  


}
