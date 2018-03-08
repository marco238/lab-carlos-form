import { User } from './../../../shared/models/user.model';
import { Component, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class QuoteFormComponent  {
  user: User = new User();
  @Output() onCreate: EventEmitter<User> = new EventEmitter<User>();

  onSubmitQuoteForm(quoteForm: NgForm) {
    console.log(this.user);
    this.onCreate.emit(this.user); // this.onCreate.emit(Object.assign({}, this.quote));
    this.user = new User();
    quoteForm.reset();
  }
}
