import { Component, OnInit } from '@angular/core';
import{Observable} from 'rxjs';
import { UploadService } from '../upload.service';
@Component({
  selector: 'app-uploaddownload',
  templateUrl: './uploaddownload.component.html',
  styleUrls: ['./uploaddownload.component.css']
})
export class UploaddownloadComponent implements OnInit {

  selectedfile:FileList;
  msg:string="";
  filesinfo:Observable<any>;


  constructor(private userv:UploadService) { }

  ngOnInit(): void {
    this.filesinfo=this.userv.getallfiles();
  }
  browsedfile(event)
  {
    this.selectedfile=event.target.files;
    console.log(event.target.files);
   console.log(this.selectedfile);
  }

  uploadallfile()
  {
    if(this.selectedfile)
    {
      for(let i=0;i<this.selectedfile.length;i++)
      {
        this.uploadfile(this.selectedfile[i]);
      }
    }
  }
  uploadfile(file:File)
  {
    if(file)
    {
      this.userv.uploadfiles(file).subscribe(data=>{
     this.msg="uploaded file successfully";
     this.filesinfo=this.userv.getallfiles();
      });
    }
  }


}
