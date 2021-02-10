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

    boardGame.push(data.games[randNum].name);

    console.log(boardGame);

    document.getElementById("gameSuggestion").innerHTML = String(boardGame);
    
  }



}
