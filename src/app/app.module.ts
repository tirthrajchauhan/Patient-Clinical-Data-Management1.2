import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './components/create/create.component';
import { IndexComponent } from './components/index/index.component';
import { EditComponent } from './components/edit/edit.component';
import { AddrecordComponent } from './components/addrecord/addrecord.component';
import { RouterModule, Routes } from '@angular/router';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { HttpClientModule } from '@angular/common/http';
import { PatientService } from './patient.service';
import { ReactiveFormsModule } from '@angular/forms';
import { GetrecordComponent } from './components/getrecord/getrecord.component';
import { EditrecordComponent } from './components/editrecord/editrecord.component';




const routes: Routes = [
  {
    path: 'create',
    component: CreateComponent
  },
  {
    path: 'edit/:id',
    component: EditComponent
  },
  {
    path: 'index',
    component: IndexComponent
  },
  {
    path: 'addrecord',
    component: AddrecordComponent
  },
  {
    path: 'getrecord',
    component: GetrecordComponent
  },
  {
    path: 'editrecord',
    component: EditrecordComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    IndexComponent,
    EditComponent,
    AddrecordComponent,
    GetrecordComponent,
    EditrecordComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    SlimLoadingBarModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [PatientService],
  bootstrap: [AppComponent]
})
export class AppModule { }

