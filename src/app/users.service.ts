import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { environment } from "../environments/environment";

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  public baseUrl='';
  public baseUrl2='';
  public baseUrl3='';
  public requestOptions;
  constructor(private http:HttpClient) { 
    this.baseUrl = environment.baseUrl;
    this.baseUrl2 = environment.baseUrl2;
    this.baseUrl3 = environment.baseUrl3;

    let authToken = JSON.parse(localStorage.getItem('authToken'));
    let header = new HttpHeaders({ "__authorization_x_token": authToken});

    this.requestOptions = {  headers: header}; 
  }

  getCustomer()
  {
    // let url=this.baseUrl + "/api/v1/getallcustomer"
    let ownderId = JSON.parse(localStorage.getItem('adminId'));
    let url = this.baseUrl2 + `/api/v1/admin/getAllCustomerList/${ownderId}/1000/0`;
    return this.http.get(url,this.requestOptions);
  }

  getNewCustomer()
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

    let url=this.baseUrl2 + "/api/v1/admin/loginAdmin"
    return this.http.post(url,body);

  }
  Email(body){

    let url=this.baseUrl + "/api/v1/sendMail/"+body
    return this.http.post(url,body);

  }
  PushNotification(body)
  {
    let url=this.baseUrl + "/api/v1/sendpushnotification/"+body
    return this.http.post(url,body);
  }

  editCustomer(body,id)
  {
    let url=this.baseUrl + "/api/v1/editcustomer/"+id
    return this.http.put(url,body);
  }
  

}
