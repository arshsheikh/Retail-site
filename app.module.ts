import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductModule } from './product/product.module';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ProductDataComponent } from './product/products/product-data/product-data.component';
import { CustomerPageComponent } from './customer/customer-page/customer-page.component';
import { CustomerExistingComponent } from './customer/customer-page/customer-existing/customer-existing.component';
import { CustomerNewComponent } from './customer/customer-page/customer-new/customer-new.component';

@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        ProductModule,
    ]
})
export class AppModule { }
