import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";

interface Users {
  firstName: string;
  password: string;
}

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})




export class ReportComponent implements OnInit {

  

  user: Users;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.user = {
      firstName: 'John',
      password:  'test'
  };

    
  }


  httpPostExample(first: string,password: string) {

    this.http.post("https://jsonplaceholder.typicode.com/posts",
    {
      title: first,
      body: password,
      userId: 1
    })
        .subscribe(
            (val) => {
                console.log("POST call successful value returned in body", 
                            val);
            },
            response => {
                console.log("POST call in error", response);
            },
            () => {
                console.log("The POST observable is now completed.");
            });
    }


    onSubmitTemplateBased() {
      console.log('click');
      this.httpPostExample(this.user.firstName,this.user.password);
  }

}
