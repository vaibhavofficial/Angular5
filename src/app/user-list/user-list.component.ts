import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  name = "user list component";
  users: any = [];
  users2: any = [];
  singleUser;

  constructor(private UserServiceService: UserServiceService, private router: Router) { }

  ngOnInit() {
    this.UserServiceService.getUsers().subscribe(response => {this.users = response});
    this.UserServiceService.getUsers2().subscribe(response => {this.users2 = response});
  }

  onSelect(user){
    this.router.navigate(['user', user.id]);
  }

}
