import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentEntryComponent } from './student-entry/student-entry.component';
import { StudentViewComponent } from './student-view/student-view.component';
import { SearchStudentComponent } from './search-student/search-student.component';
import { DeleteStudentComponent } from './delete-student/delete-student.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';

const myRoute=[
{
  path:"",
  component:StudentEntryComponent
},
{
  path:"view",
  component:StudentViewComponent
},
{
  path:"search",
  component:SearchStudentComponent
},
{
  path:"delete",
  component:DeleteStudentComponent
}
]

@NgModule({
  declarations: [
    AppComponent,
    StudentEntryComponent,
    StudentViewComponent,
    SearchStudentComponent,
    DeleteStudentComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
