import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-randomizer',
  templateUrl: './randomizer.component.html',
  styleUrls: ['./randomizer.component.css']
})
export class RandomizerComponent implements OnInit {




  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  


  async getData(){

    const api_url ='https://api.boardgameatlas.com/api/search?client_id=t8RLkXvzon'
    const response = await fetch(api_url);
    const data = await response.json();
    let randNum = Math.floor((Math.random() * 100));
    let boardGame = [];
    let bgImage = [];

    boardGame.push(data.games[randNum].name);
    bgImage.push(data.games[randNum].thumb_url);

    console.log(boardGame);
    console.log(bgImage);

    document.getElementById("gameSuggestion").innerHTML = String(boardGame);
    document.getElementById("bgThumbnail").innerHTML= String('<img src="'+bgImage+'">');
    
  }



}
