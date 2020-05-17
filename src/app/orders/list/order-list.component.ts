import {Component, OnInit} from '@angular/core';
import {Order, OrderService} from '../order.service';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';

@Component({
  selector: 'app-orders',
  templateUrl: './order-list.component.html'
})
export class OrderListComponent implements OnInit {
  orders: Observable<Order[]>;

  constructor(
    private router: Router,
    private orderService: OrderService
  ) {
  }

  ngOnInit() {
    this.orders = this.orderService.getAll();
  }

  createOrderClick() {
    this.router.navigateByUrl('orders/create');
  }
}
