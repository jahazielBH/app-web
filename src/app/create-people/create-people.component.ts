import { Component, OnInit } from '@angular/core';
import { RedisService } from '../redis/redis.service';
import { PersonI } from '../model/person/person';

@Component({
  selector: 'app-create-people',
  templateUrl: './create-people.component.html',
  styleUrls: ['./create-people.component.scss']
})
export class CreatePeopleComponent implements OnInit {

  person: PersonI = new PersonI()
  submitted = false;

  constructor(private redisService: RedisService) { }

  ngOnInit(): void {
  }

  save() {
    this.redisService.create(this.person)
      .subscribe(data => console.log(data), error => console.log(error));
    this.person = new PersonI();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }
}
