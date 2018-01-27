import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.httpPostExample();
  }


  httpPostExample() {

    this.http.post("https://jsonplaceholder.typicode.com/posts",
    {
      title: 'foo',
      body: 'bar',
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

}
