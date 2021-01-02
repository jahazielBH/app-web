import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RedisService } from '../redis/redis.service';
import { PersonI } from '../model/person/person';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {
 persons: PersonI[];

  constructor(private redisService: RedisService) { }

  ngOnInit() {
    this.redisService.getAll().subscribe(data => {
      this.persons = data;
      console.log(data);
    },
    error => {
      console.log(error);
    });
  }

}
