import { Component } from '@angular/core';

@Component({
  selector: 'app-student-entry',
  templateUrl: './student-entry.component.html',
  styleUrls: ['./student-entry.component.css']
})
export class StudentEntryComponent {

  
  Name=""
  RollNumber=""
  AdmissionNumber=""
  MobileNumber=""
  CollegeName=""
  ParentName=""
  ParentMobile=""
  Username=""
  Password=""


  readValues=()=>
  {
    let data:any={"Name":this.Name,
    "RollNumber":this.RollNumber,
    "AdmissionNumber":this.AdmissionNumber,
    "MobileNumber":this.MobileNumber,
    "CollegeName":this.CollegeName,
    "ParentName":this.ParentName,
    "ParentMobile":this.ParentMobile,
    "Username":this.Username,
    "Password":this.Password}

    console.log(data)
  }
}
