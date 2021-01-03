import { Component, OnInit } from '@angular/core';
import { RedisService } from '../redis/redis.service';
import { PersonI } from '../model/person/person';

@Component({
  selector: 'app-search-people',
  templateUrl: './search-people.component.html',
  styleUrls: ['./search-people.component.scss']
})
export class SearchPeopleComponent implements OnInit {

  id: any;
  person: PersonI;
  constructor(private redisService: RedisService) { }

  ngOnInit(){
    this.id = 0;
  }

  private searchPerson() {
    this.redisService.getById(this.id)
      .subscribe((person: PersonI) => (this.person = person, console.log(person)));
  }

  onSubmit() {
    this.searchPerson();
  }
}
