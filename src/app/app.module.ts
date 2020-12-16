import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { AppMaterialModule } from './app.material.module';
import { ContactsComponent } from './contacts';
import { ContactDetailComponent } from './contacts/contact-detail';
import { ContactEditComponent } from './contacts/contact-edit';
import { ContactFeedDialogComponent } from './contacts/contact-feed';
import { ContactListComponent } from './contacts/contact-list';
import { NewContactComponent } from './contacts/new-contact/new-contact.component';
import { FavoriteIconDirective, InvalidEmailModalComponent, InvalidPhoneNumberModalComponent, PhoneNumberPipe, ShowContactsDirective, ContactService } from './contacts/shared';
import { ContactFeedService } from './contacts/shared/services';
import { InMemoryDataService } from './in-memory-data.service';
import { PageNotFoundComponent } from './page-not-found-component';

@NgModule({
  declarations: [
    AppComponent,
    ContactEditComponent,
    ContactDetailComponent,
    ContactFeedDialogComponent,
    ContactListComponent,
    ContactsComponent,
    FavoriteIconDirective,
    InvalidEmailModalComponent,
    InvalidPhoneNumberModalComponent,
    PageNotFoundComponent,
    PhoneNumberPipe,
    NewContactComponent,
    ShowContactsDirective
  ],
  entryComponents: [
    ContactFeedDialogComponent,
    InvalidEmailModalComponent,
    InvalidPhoneNumberModalComponent
  ],
  imports: [
    AppMaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: true }),
    RoutingModule
  ],
  providers: [
    ContactService,
    ContactFeedService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
