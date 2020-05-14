import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {Order, OrderService} from '../order.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {NgbModalRef} from '@ng-bootstrap/ng-bootstrap/modal/modal-ref';

@Component({
  selector: 'app-join-order',
  templateUrl: './order-join.component.html'
})
export class OrderJoinComponent implements OnInit {
  @Input() orderId: string;
  @Output() orderJoined: EventEmitter<Order> = new EventEmitter<Order>();
  joinOrderForm: FormGroup;
  modal: NgbModalRef;
  loading = false;
  submitted = false;
  error;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private orderService: OrderService,
    private modalService: NgbModal
  ) {
  }

  get f() {
    return this.joinOrderForm.controls;
  }

  ngOnInit(): void {
    this.joinOrderForm = this.formBuilder.group({
      dishName: ['', Validators.required],
      dishCost: ['', Validators.required],
    });
  }

  joinClick() {
    this.submitted = true;
    if (this.joinOrderForm.valid) {
      this.joinOrderForm.disable();
      this.loading = true;
      this.orderService.join(this.orderId, this.f.dishName.value, this.f.dishCost.value)
        .subscribe(order => {
          this.modal.close();
          this.joinOrderForm.enable();
          this.orderJoined.emit(order);
        }, error => {
          this.loading = false;
          this.error = error;
          this.joinOrderForm.enable();
        });
    }
  }

  open(content) {
    this.modal = this.modalService.open(content, {
      ariaLabelledBy: 'modal-basic-title',
      beforeDismiss: () => {
        return !this.loading;
      }
    });
    this.modal.result.finally(() => {
      this.joinOrderForm.setValue({
        dishName: null,
        dishCost: null,
      });
      this.submitted = false;
      this.loading = false;
      this.error = null;
    });
  }
}
