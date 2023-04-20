import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-root/app.component';
import { ContactsListComponent } from './cmps/contacts-list/contacts-list.component';
import { ContactsFilterComponent } from './cmps/contacts-filter/contacts-filter.component';
import { ContactPreviewComponent } from './cmps/contact-preview/contact-preview.component';
import { ContactDetailsComponent } from './views/contact-details/contact-details.component';
import { ContactIndexComponent } from './views/contact-index/contact-index.component';
import { FormsModule } from '@angular/forms';
import { HomePageComponent } from './views/home-page/home-page.component';
import { HttpClientModule } from '@angular/common/http';
import { BitcoinChartComponent } from './views/bitcoin-chart/bitcoin-chart.component';
import { BTCChartComponent } from './cmps/btc-chart/btc-chart.component';
import { HeaderComponent } from './cmps/app-header/header.component';
import { UserMsgComponent } from './cmps/user-msg/user-msg.component';
import { ContactEditComponent } from './views/contact-edit/contact-edit.component';
import { SignUpComponent } from './views/sign-up/sign-up.component';
import { LoginComponent } from './views/login/login.component';
import { MoveListComponent } from './cmps/move-list/move-list.component';
import { UserLastMovesComponent } from './cmps/user-last-moves/user-last-moves.component';
import { KeyvaluefilterPipe } from './pipes/keyvaluefilter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ContactsListComponent,
    ContactsFilterComponent,
    ContactPreviewComponent,
    ContactDetailsComponent,
    ContactIndexComponent,
    HomePageComponent,
    BitcoinChartComponent,
    BTCChartComponent,
    HeaderComponent,
    UserMsgComponent,
    ContactEditComponent,
    SignUpComponent,
    LoginComponent,
    MoveListComponent,
    UserLastMovesComponent,
    KeyvaluefilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
