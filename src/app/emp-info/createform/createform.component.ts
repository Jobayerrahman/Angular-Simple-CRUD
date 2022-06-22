import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmpsDataService } from '../../services/emps-data.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-createform',
  templateUrl: './createform.component.html',
  styleUrls: ['./createform.component.css']
})
export class CreateformComponent implements OnInit {

  emps:any;
  constructor(private empData:EmpsDataService, private router: Router) {
    this.empData.emps().subscribe(data =>{
      this.emps = data;
    })
   }

  empForm = new FormGroup({
    name: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    address: new FormControl('',Validators.required),
    phone: new FormControl('',Validators.required)
  })

  empCreate(){
    this.empData.saveEmp(this.empForm.value).subscribe(result =>{
      console.log("Data Save");
      this.router.navigateByUrl('')
      Swal.fire('Data Save Successfully!!')
    })
  }

  ngOnInit(): void {
  }

}
