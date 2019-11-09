import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-test-component',
  templateUrl: './test-component.component.html',
  styleUrls: ['./test-component.component.css']
})
export class TestComponentComponent implements OnInit {
  data: any;

  constructor( private http: HttpClient) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.http.get('http://localhost:5000/api/values').subscribe (
      response => {
          this.data = response;
      }, error => {
        console.log(error);
      });
  }

}
