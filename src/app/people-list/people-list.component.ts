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
  people: PersonI[];
  newPerson: PersonI;
  constructor(private redisService: RedisService) { }

  ngOnInit() {
    this.redisService.getAll().subscribe((data) => {
      this.people = data;
      console.log(this.people)
    },
    err => {
      console.log(err);
    });
  }

  getAll(){
    let people
  }
  
}
