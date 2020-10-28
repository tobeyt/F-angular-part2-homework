import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentComponent } from './student/student.component';
import { StudentDetailComponent } from './student-detail/student-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { studentsReducer } from './store/reducers/students.reducer';
import { EffectsModule } from '@ngrx/effects';
import { LoadStudentsEffect } from './store/effects/load-students.effect';

@NgModule({
  declarations: [
    AppComponent,
    StudentListComponent,
    StudentComponent,
    StudentDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({ students: studentsReducer }),
    EffectsModule.forRoot([LoadStudentsEffect]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
