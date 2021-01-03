import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { RedisService } from '../redis/redis.service';
import { PersonI } from '../model/person/person';
import { element } from 'protractor';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.scss']
})
export class PeopleListComponent implements OnInit {
  public people: [];
  person: PersonI;
  constructor(private redisService: RedisService) { }

  ngOnInit() {
    this.redisService.getAll().subscribe((data: []) => (this.people = data, console.log(this.people))
    );
  }
}
