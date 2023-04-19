import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpEvent,HttpRequest,HttpResponse } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private http:HttpClient) { }



  private urlapi='http://localhost:8080';



  
  uploadfiles(file:File):Observable<HttpEvent<any>>
  {
    const formdata:FormData=new FormData;
     formdata.append('file',file);
     const req=new HttpRequest('POST',`${this.urlapi}/upload`,formdata,
     {reportProgress:true,
    responseType:'json'});
    return this.http.request(req);
  }

  getallfiles():Observable<any>
  {
    return this.http.get(`${this.urlapi}/file`);
  }
}
