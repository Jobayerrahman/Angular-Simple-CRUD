import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpsDataService } from '../../services/emps-data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-updateform',
  templateUrl: './updateform.component.html',
  styleUrls: ['./updateform.component.css']
})
export class UpdateformComponent implements OnInit {

  emp:any;
  constructor(private route:ActivatedRoute, private empData:EmpsDataService ,private router: Router) { }

  empForm = new FormGroup({
    id: new FormControl('',Validators.required),
    name: new FormControl('',Validators.required),
    email: new FormControl('',Validators.required),
    address: new FormControl('',Validators.required),
    phone: new FormControl('',Validators.required)
  })
  ngOnInit(): void {
    this.empData.getCurrentEmp(this.route.snapshot.params['id']).subscribe((result)=>{
      this.emp = result;
    })
  }

  empUpdate(){
    this.empData.updateEmp(this.route.snapshot.params['id'],this.empForm.value).subscribe(result =>{
      this.router.navigateByUrl('');
      Swal.fire('Data Update Successfully!!');
    })
  }

}
