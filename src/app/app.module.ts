import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule,Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { TourComponent } from './tour/tour.component';
import { TripComponent } from './trip/trip.component';
import { RegisterComponent } from './register/register.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { TourAllComponent } from './tour-all/tour-all.component';
import { SignupComponent } from './signup/signup.component';
import { SingleTourComponent } from './single-tour/single-tour.component';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { SupportComponent } from './support/support.component';

const routes: Routes=[
  {path:'index',component:TourComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'tour_all',component:TourAllComponent},
  {path:'signup',component:SignupComponent},
  {path:'single_tour',component:SingleTourComponent},
  {path:'cart',component:CartComponent},
  {path:'confirmation',component:ConfirmationComponent},
  {path:'payment',component:PaymentComponent},
  {path:'invoice',component:InvoiceComponent},
  {path:'support',component:SupportComponent},
  {path:'',redirectTo:'/index',pathMatch:'full'}
];
@NgModule({
  declarations: [
    AppComponent,
    TourComponent,
    TripComponent,
    RegisterComponent,
    AboutComponent,
    ContactComponent,
    TourAllComponent,
    SignupComponent,
    SingleTourComponent,
    CartComponent,
    PaymentComponent,
    ConfirmationComponent,
    InvoiceComponent,
    SupportComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }