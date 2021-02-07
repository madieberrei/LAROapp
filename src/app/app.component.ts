import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = 'LAROapp';

  loadedPosts =[];
  constructor(private http: HttpClient) {

  }

  ngOnInit() {}

  onCreatePost(postData: { title: string; content: string}) {
    console.log(postData);
  }

  onFetchPosts() { 

  }  

}

