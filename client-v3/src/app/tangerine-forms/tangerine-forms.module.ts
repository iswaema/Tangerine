import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MdButtonModule, MdCheckboxModule, MdCardModule, MdInputModule, MdToolbarModule, MdSidenavModule } from '@angular/material';
import { StoreModule } from '@ngrx/store';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormlyModule, FormlyBootstrapModule } from 'ng-formly';

import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { tangerineFormSessionReducer } from './reducers/tangerine-form-session-reducer';
import { TangerineFormComponent } from './containers/tangerine-form/tangerine-form.component';
import { TangerineFormsRoutingModule } from './tangerine-forms-routing.module';
import { TangerineFormsDemoComponent } from './routes/tangerine-forms-demo/tangerine-forms-demo.component';
// import { TangerineFormPagerComponent } from './components/tangerine-form-pager/tangerine-form-pager.component';
// import { TangerineFormBreadcrumbComponent } from './components/tangerine-form-breadcrumb/tangerine-form-breadcrumb.component';
import { TangerineFormCardComponent } from './components/tangerine-form-card/tangerine-form-card.component';
import { TangerineFormCardDemoComponent } from './routes/tangerine-form-card-demo/tangerine-form-card-demo.component';
import { TangerineFormSessionComponent } from './components/tangerine-form-session/tangerine-form-session.component';
import { TangerineFormResumeDemoComponent } from './routes/tangerine-form-resume-demo/tangerine-form-resume-demo.component';
// import { TangerineFormCarouselComponent } from './components/tangerine-form-carousel/tangerine-form-carousel.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MdCardModule, MdButtonModule, MdCheckboxModule, MdInputModule, MdToolbarModule, MdSidenavModule,
    TangerineFormsRoutingModule,
    FormlyModule.forRoot(),
    FormlyBootstrapModule,
    StoreModule.provideStore({ tangerineFormSession: tangerineFormSessionReducer }),
    StoreDevtoolsModule.instrumentOnlyWithExtension({
      maxAge: 100
    })
  ],
  declarations: [
    TangerineFormComponent,
    TangerineFormsDemoComponent,
 //   TangerineFormPagerComponent,
 //   TangerineFormBreadcrumbComponent,
    TangerineFormCardComponent,
 TangerineFormCardDemoComponent,
 TangerineFormSessionComponent,
 TangerineFormResumeDemoComponent,
 //   TangerineFormCarouselComponent
  ],
  exports: [
    TangerineFormCardComponent,
    TangerineFormComponent
  ]
})
export class TangerineFormsModule { }
