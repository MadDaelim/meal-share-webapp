import {ComponentFixture, TestBed} from '@angular/core/testing';
import {OrderDetailsComponent} from './order-details.component';
import {OrderService} from '../order.service';
import {ActivatedRoute} from '@angular/router';
import {of} from 'rxjs';
import {Order} from '../../model/Order';
import {filter, take} from 'rxjs/operators';

describe('order details spec', () => {
  let fixture: ComponentFixture<OrderDetailsComponent>;
  let component: OrderDetailsComponent;
  const orderService = {
    get: (orderId: string) => of(null)
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        OrderDetailsComponent
      ],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            params: of({orderId: 'orderId'})
          }
        },
        {
          provide: OrderService,
          useValue: orderService
        }
      ]
    });

    fixture = TestBed.createComponent(OrderDetailsComponent);
    component = fixture.componentInstance;
  });

  it('should load order on component init', async () => {
    const order = initComponent('orderId');
    const result = await retrieveOrder();
    expect(result).toEqual(order);
  });

  function initComponent(orderId: string) {
    const order = createOrder(orderId);
    mockOrderServiceGet(order);
    component.ngOnInit();
    return order;
  }

  function createOrder(orderId: string) {
    return new Order(
      orderId,
      '',
      '',
      '',
      '',
      '',
      '',
      '',
      []
    );
  }

  function mockOrderServiceGet(order: Order) {
    orderService.get = (orderId: string) => of(order);
  }

  async function retrieveOrder() {
    return component.order.pipe(
      filter(filteredOrder => !!filteredOrder),
      take(1)
    ).toPromise();
  }

  it('should replace order', async () => {
    initComponent('firstOrderId');
    const secondOrder = createOrder('secondOrderId');
    component.replace(secondOrder);
    const result = await retrieveOrder();
    expect(result).toEqual(secondOrder);
  });
});
