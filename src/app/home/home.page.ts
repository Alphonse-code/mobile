import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../api.service';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  usersData: any;

  ngOnInit() {
    this.getAllUsers();
  }

  constructor(
    public apiService: ApiService
  ) {
    this.usersData = [];
  }
 

  getAllUsers() {
    //Get saved list of students
    this.apiService.getList().subscribe(response => {
      console.log(response);
      this.usersData = response;
    })
  }
 
}
