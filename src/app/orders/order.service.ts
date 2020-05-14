import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

export interface Order {
  orderId: string;
  restaurantName: string;
  restaurantMenu: string;
  deliveryCost: string;
  containerCost: string;
  orderDate: string;
  orderTime: string;
  pickUpPlace: string;
  dishes: Dish[];
}

export interface Dish {
  userId: string;
  name: string;
  price: string;
}

@Injectable({providedIn: 'root'})
export class OrderService {
  constructor(private http: HttpClient) {
  }

  create(restaurantName: string,
         restaurantMenu: string,
         deliveryCost: string,
         containerCost: string,
         orderDate: string,
         orderTime: string,
         pickUpPlace: string): Observable<Order> {
    return this.http.post<any>(`${environment.apiUrl}/orders`, {
      restaurantName,
      restaurantMenu,
      deliveryCost,
      containerCost,
      orderDate,
      orderTime,
      pickUpPlace
    });
  }

  getAll(): Observable<Order[]> {
    return this.http.get<Order[]>(`${environment.apiUrl}/orders`);
  }

  get(orderId: string): Observable<Order> {
    return this.http.get<Order>(`${environment.apiUrl}/orders/${orderId}`);
  }

  join(orderId: string, dishName: string, dishPrice: string): Observable<Order> {
    return this.http.post<Order>(`${environment.apiUrl}/orders/${orderId}/@join`, {
      dishName,
      dishPrice
    });
  }
}
