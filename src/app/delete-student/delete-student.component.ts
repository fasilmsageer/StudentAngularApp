import { Component } from '@angular/core';

@Component({
  selector: 'app-delete-student',
  templateUrl: './delete-student.component.html',
  styleUrls: ['./delete-student.component.css']
})
export class DeleteStudentComponent {

  AdmissionNumber=""

  readValues=()=>
  {
    let data:any={
      "AdmissionNumber":this.AdmissionNumber
    }
    console.log(data)
  }

}
