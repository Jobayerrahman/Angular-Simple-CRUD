import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import{Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpsDataService {

  url = "http://localhost:58528/Api/v1/GetEmployees";

  constructor(private http:HttpClient) { }

  emps(){
    return this.http.get(this.url)
  }

  urlSave = "http://localhost:58528/Api/v1/AddEmployee";
  saveEmp( data:any){
    return this.http.post(this.urlSave,data);
  }

  urlSingleEmp = "http://localhost:58528/Api/v1/GetEmployeeById"
  getCurrentEmp(Id:number){
    return this.http.get(this.urlSingleEmp+'/'+Id);
  }

  urlUpdateEmp= "http://localhost:58528/Api/v1/UpdateEmployee?Id="
  updateEmp(Id:number, data:any){
    return this.http.put(this.urlUpdateEmp+Id,data);
  }

  
  urlDelete = "http://localhost:58528/Api/v1/DeleteEmployee?Id=";
  deleteEmp(Id:number):Observable<number>{
    let httpheaders=new HttpHeaders()
    .set('Content-type','application/Json');
    let options={
      headers:httpheaders
    };
    return this.http.delete<number>(this.urlDelete+Id);
  }
}
