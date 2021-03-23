import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { environment } from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public baseUrl=''
  constructor(private http:HttpClient) { 
    this.baseUrl = environment.baseUrl;
  }

  getCustomer()
  {
    let url=this.baseUrl + "/api/v1/getallcustomer"
    return this.http.get(url);
  }

  saveCustomer(body)
  {
    let url=this.baseUrl + "/api/v1/createcustomer"
    return this.http.post(url,body);
  }

  Message(body)
  {
    let url=this.baseUrl + "/api/v1/sendmessage/"+body
    return this.http.get(url,body);
  }
  Login(body){

    let url=this.baseUrl + "/api/v1/admin/loginAdmin"
    return this.http.post(url,body);

  }
  

}
