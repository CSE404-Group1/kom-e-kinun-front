// modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

// components
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { CategorypageComponent } from './components/categorypage/categorypage.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { VendorpageComponent } from './components/vendorpage/vendorpage.component';
import { ItempageComponent } from './components/itempage/itempage.component';
import { AdminLoginComponent } from './components/admin-login/admin-login.component';
import { AdminRegistrationComponent } from './components/admin-registration/admin-registration.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminProductListComponent } from './components/admin-product-list/admin-product-list.component';
import { AdminProductDetailsComponent } from './components/admin-product-details/admin-product-details.component';
import { AdminAddProductComponent } from './components/admin-add-product/admin-add-product.component';
import { AdminEditProductComponent } from './components/admin-edit-product/admin-edit-product.component';
import { AdminProfileComponent } from './components/admin-profile/admin-profile.component';
import { AdminEditProfileComponent } from './components/admin-edit-profile/admin-edit-profile.component';
import { AdminSettingsComponent } from './components/admin-settings/admin-settings.component';
import { NotFoundpageComponent } from './components/not-foundpage/not-foundpage.component';
import { TermsAndConditionsComponent } from './components/terms-and-conditions/terms-and-conditions.component'

// services
import { ApiService } from './services/api.service';

const appRoutes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'category/:cat', component: CategorypageComponent },
  { path: 'login', component: AdminLoginComponent },
  { path: 'register', component: AdminRegistrationComponent },
  { path: 'terms-and-conditions', component: TermsAndConditionsComponent }

]


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    CategorypageComponent,
    NavbarComponent,
    FooterComponent,
    VendorpageComponent,
    ItempageComponent,
    AdminLoginComponent,
    AdminRegistrationComponent,
    AdminDashboardComponent,
    AdminProductListComponent,
    AdminProductDetailsComponent,
    AdminAddProductComponent,
    AdminEditProductComponent,
    AdminProfileComponent,
    AdminEditProfileComponent,
    AdminSettingsComponent,
    NotFoundpageComponent,
    TermsAndConditionsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
