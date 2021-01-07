import { TestBed } from '@angular/core/testing';
import { HttpClientModule} from '@angular/common/http';
import { RedisService } from './redis.service';
import { AppRoutingModule } from '../app-routing.module';

describe('RedisService', () => {
  let service: RedisService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule, AppRoutingModule],
      providers: [ HttpClientModule]
    });
    service = TestBed.inject(RedisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
