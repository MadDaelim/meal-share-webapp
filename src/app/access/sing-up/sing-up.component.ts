import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {first} from 'rxjs/operators';
import {UserService} from '../user.service';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html'
})
export class SingUpComponent implements OnInit {
  singUpForm: FormGroup;
  loading = false;
  submitted = false;
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService
  ) {
  }

  get f() {
    return this.singUpForm.controls;
  }

  ngOnInit(): void {
    this.singUpForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.singUpForm.invalid) {
      return;
    }

    this.loading = true;
    this.userService.singUp(this.f.username.value, this.f.password.value, this.f.confirmPassword.value)
      .pipe(first())
      .subscribe(
        () => {
          this.router.navigateByUrl('/sing-in');
        },
        error => {
          this.error = error;
          this.loading = false;
        });
  }
}
