import { TestBed } from '@angular/core/testing';
import { UsersService } from './users.service';
import { HttpClientModule } from '@angular/common/http';
import { UserApi } from "../models/usersapi";

describe('DataApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [ HttpClientModule],
    providers: [ HttpClientModule]
  }));

  it('should return an Logged User', () => {
    // Arrange
    const service: UsersService = TestBed.get(UsersService);

    var mydata = new UserApi;
	  mydata.username = "jahazielbh";
    mydata.password = "123456789";
    
    // Act
    service.loginUser(mydata).subscribe((user: any) => {
      console.log(user.tokenType);
      console.log(user.accessToken);

      expect(user.tokenType).toEqual('Bearer');
    });
 
  });

});
