import {
  Component,
  OnInit,
  DoCheck, AfterViewChecked, AfterViewInit, AfterContentChecked
} from '@angular/core';
import {BookModel} from "../shared/interfaces";
import {BookService} from "../shared/services/book.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, AfterContentChecked  {
  itemsInCart: BookModel[] = [];
  totalItemsAmountInCart: number = 0;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
  }

  ngAfterContentChecked() {
    this.itemsInCart = this.bookService.boughtBooksList;

    if (this.itemsInCart.length > 0) {
      this.totalItemsAmountInCart = this.itemsInCart.map(item => item.howMuchIsAddedToCart)
        .reduce((prev, curr) => prev + curr);
    } else {
      this.totalItemsAmountInCart = 0;
    }
    this.bookService.countTotalAmountInCart(this.totalItemsAmountInCart);
  }
}
