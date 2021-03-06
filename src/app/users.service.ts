import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { environment } from "../environments/environment";
;
import {Observable} from 'rxjs';
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
  saveAso(body)
  {
    let url=this.baseUrl + "/api/v1/createaso"
    return this.http.post(url,body);
  }
  getAso()
  {
    let url=this.baseUrl + "/api/v1/getallaso"
    return this.http.get(url);
  }
  saveSeo(body)
  {
    let url=this.baseUrl + "/api/v1/createseo"
    return this.http.post(url,body);
  }
  getSeo()
  {
    let url=this.baseUrl + "/api/v1/getallseo"
    return this.http.get(url);
  }
  getOffer()
  {
    let url=this.baseUrl + "/api/v1/getalloffer"
    return this.http.get(url);
  }
  
//   public baseApiUrl = "https://file.io"
//   upload(file):Observable<any> {
  
//     // Create form data
//     const formData = new FormData(); 
      
//     // Store form name as "file" with file data
//     formData.append("file", file, file.name);
      
//     // Make http post request over api
//     // with formData as req
//     return this.http.post(this.baseApiUrl, formData)
// }


uploadFile(file)
  {
    console.log("service",file);
    

    // var formdata = new FormData();
  
    // Create formdata object and append the object
    // file to the name 'Blob file'
    // formdata.append("Blob File",file );
    // debugger
    let url=this.baseUrl + "/api/v1/fileupload/"
    return this.http.post(url,file);
    
  }









}
