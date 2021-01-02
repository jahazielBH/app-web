import { Component, OnInit } from '@angular/core';
import { RedisService } from '../redis/redis.service';
import { PersonI } from '../model/person/person';

@Component({
  selector: 'app-create-people',
  templateUrl: './create-people.component.html',
  styleUrls: ['./create-people.component.scss']
})
export class CreatePeopleComponent implements OnInit {

  

  submitted = false;

  constructor(private redisService: RedisService) { }

  ngOnInit(): void {
  }

  
}
