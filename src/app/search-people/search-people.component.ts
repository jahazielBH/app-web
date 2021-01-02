import { Component, OnInit } from '@angular/core';
import { RedisService } from '../redis/redis.service';
import { PersonI } from '../model/person/person';

@Component({
  selector: 'app-search-people',
  templateUrl: './search-people.component.html',
  styleUrls: ['./search-people.component.scss']
})
export class SearchPeopleComponent implements OnInit {

  id = 0;
  user: PersonI[] = [];
  constructor(private redisService: RedisService) { }

  ngOnInit(){
    
  }

  
}
