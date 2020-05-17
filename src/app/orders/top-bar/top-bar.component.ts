import {Component, OnInit} from '@angular/core';
import {UserService} from '../../shared/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html'
})
export class TopBarComponent implements OnInit {
  username: string;

  constructor(private router: Router,
              private userService: UserService) {
  }

  singOutClick() {
    this.userService.singOut();
    this.router.navigateByUrl('/sing-in');
  }

  ngOnInit(): void {
    this.username = this.userService.singedInUser.username;
  }
}
