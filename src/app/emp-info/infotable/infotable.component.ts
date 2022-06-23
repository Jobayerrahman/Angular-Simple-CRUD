import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { EmpsDataService } from '../../services/emps-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-infotable',
  templateUrl: './infotable.component.html',
  styleUrls: ['./infotable.component.css']
})
export class InfotableComponent implements OnInit {

  emps:any;
  page: number = 1;
  perPageItem = 5;
  constructor(private empData:EmpsDataService, private router: Router) {
    this.empData.emps().subscribe(data =>{
      this.emps = data;
    })
   }

  ngOnInit(): void {
  }

  deleteEmp(id:any){
    Swal.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No',
    }).then((result)=>{
      if(result.value){
        this.empData.deleteEmp(id).subscribe((result)=>{
          Swal.fire('Data Delete Successfully!');
          setTimeout(()=>{
            window.location.reload();
          },300);
        });
      }
      else if(result.dismiss === Swal.DismissReason.cancel){
        Swal.close();
      }
    });
  }

}
