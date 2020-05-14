import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {OrderService} from '../order.service';

@Component({
  selector: 'app-create-order',
  templateUrl: './order-create.component.html'
})
export class OrderCreateComponent implements OnInit {
  createOrderForm: FormGroup;
  submitted = false;
  loading = false;
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private orderService: OrderService
  ) {
  }

  get f() {
    return this.createOrderForm.controls;
  }

  ngOnInit(): void {
    this.createOrderForm = this.formBuilder.group({
      restaurantName: ['', Validators.required],
      restaurantMenu: ['', Validators.required],
      deliveryCost: ['', Validators.required],
      containerCost: ['', Validators.required],
      orderDate: ['', Validators.required],
      orderTime: ['', Validators.required],
      pickUpPlace: ['', Validators.required]
    });
    const date = new Date();
    this.createOrderForm.patchValue({
      orderDate: {
        year: date.getFullYear(),
        month: date.getMonth(),
        day: date.getDay()
      },
      orderTime: {
        hour: date.getHours(),
        minute: date.getMinutes()
      }
    });
  }

  onSubmit() {
    this.submitted = true;
    if (this.createOrderForm.valid) {
      this.createOrderForm.disable();
      this.loading = true;
      this.orderService.create(
        this.f.restaurantName.value,
        this.f.restaurantMenu.value,
        this.f.deliveryCost.value,
        this.f.containerCost.value,
        this.formatDate(this.f.orderDate.value),
        this.formatTime(this.f.orderTime.value),
        this.f.pickUpPlace.value
      ).subscribe(order => {
        this.router.navigateByUrl(`orders/${order.orderId}`);
      });
    }
  }

  formatDate(date: any) {
    return `${date.year}-${String(date.month).padStart(2, '0')}-${String(date.day).padStart(2, '0')}`;
  }

  formatTime(time: any) {
    return `${String(time.hour).padStart(2, '0')}:${String(time.minute).padStart(2, '0')}`;
  }
}
