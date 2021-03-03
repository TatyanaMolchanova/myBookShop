import {
  Component,
  OnInit
} from '@angular/core';
import {BookService} from "../shared/services/book.service";
import {BookModel} from "../shared/interfaces";


@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {

  books: BookModel[] = [];
  cartItemsNumber: number = 0;

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.getBooks();
    this.bookService.getTotalAmountInCart$.subscribe((totalAmount) => {
      this.cartItemsNumber = totalAmount;
    })
  }

  buy(book: BookModel) {
    book.howMuchIsAddedToCart++;
    this.bookService.addBook(book);
  }

  private getBooks(): void {
    this.bookService.getBooks()
      .subscribe(books => this.books = books)
  }
}
