// import modules here
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { WizardModule } from 'ng2-archwizard';
import { RouterModule } from '@angular/router';
import { I18nModule } from './shared/modules/i18n';
import { TranslateModule } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialDesigModule } from './shared/modules/material-design';
import { RegisterWizardModule, RegisterComponent } from './account/register';

// import components here
import { HomeComponent } from './home';
import { AppComponent } from './app.component';
import { LoginComponent } from './account/login';
import { PaymentComponent } from './shared/components/payment';
import { ProfileComponent } from './shared/components/profile';
import { AccountSetupComponent } from './shared/components/account-setup';


// import directives/pipes here

// import constants here
import { APP_ROUTES } from './app.routes';

/**
 * @author: Shoukath Mohammed
 */

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    PaymentComponent,
    ProfileComponent,
    AccountSetupComponent
  ],
  imports: [
    I18nModule,
    HttpModule,
    FormsModule,
    WizardModule,
    BrowserModule,
    TranslateModule,
    MaterialDesigModule,
    NgbModule.forRoot(),
    RegisterWizardModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
