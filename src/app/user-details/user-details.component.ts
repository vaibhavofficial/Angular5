import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service/user-service.service';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  singleUser = { };
  constructor(private UserServiceService: UserServiceService, private route: ActivatedRoute) { }

  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id');
    this.UserServiceService.getUser(id).subscribe(response => { this.singleUser = response });
    console.log(this.singleUser);
  }

}


