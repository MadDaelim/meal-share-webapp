import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Order, OrderService} from '../order.service';
import {BehaviorSubject, Observable} from 'rxjs';
import {flatMap, map} from 'rxjs/operators';

@Component({
  selector: 'app-create-order',
  templateUrl: './order-details.component.html'
})
export class OrderDetailsComponent implements OnInit {
  order: Observable<Order>;
  error;

  private readonly orderSubject: BehaviorSubject<Order>;

  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService
  ) {
    this.orderSubject = new BehaviorSubject<Order>(null);
    this.order = this.orderSubject.asObservable();
  }

  ngOnInit(): void {
    this.route.params.pipe(
      map(params => params.orderId),
      flatMap(orderId => this.orderService.get(orderId))
    ).subscribe(order => this.orderSubject.next(order));
  }

  replace(order: Order) {
    this.orderSubject.next(order);
  }
}
