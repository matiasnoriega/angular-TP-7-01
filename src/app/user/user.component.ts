import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { DaoService }  from '../users/dao.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  user: User;
  
  constructor(
    private route: ActivatedRoute,
    private daoService: DaoService,
    private location: Location) { 
    
  }

  ngOnInit() {
    this.getUser();
  }

  getUser(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.daoService.getUser(id)
      .subscribe(user => this.user = user);
  }
}

interface User {
	id: string;
	nombre: string;
	apellido: string;
	avatar: string;
}

