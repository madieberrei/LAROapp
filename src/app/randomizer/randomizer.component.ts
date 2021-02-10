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
    let bgTitle = [];
    let bgImage = [];
    let bgMinPlayers = [];
    let bgMaxPlayers =[];
    let bgMinTime = [];
    let bgMaxTime = [];
    let bgDescrip = [];

    bgTitle.push(data.games[randNum].name);
    bgImage.push(data.games[randNum].thumb_url);
    bgMinPlayers.push(data.games[randNum].min_players);
    bgMaxPlayers.push(data.games[randNum].max_players);
    bgMinTime.push(data.games[randNum].min_playtime);
    bgMaxTime.push(data.games[randNum].max_playtime);
    bgDescrip.push(data.games[randNum].description);

    //console.log(bgTitle);
    //console.log(bgImage);

    document.getElementById("bgTitle").innerHTML = String(bgTitle);
    document.getElementById("bgPlayers").innerHTML = String('# of Players: ' + bgMinPlayers + ' - ' + bgMaxPlayers);
    document.getElementById("bgTime").innerHTML = String('Play Duration: ' + bgMinTime + ' - ' + bgMaxTime);
    document.getElementById("bgDescrip").innerHTML = String(bgDescrip);
    document.getElementById("bgThumbnail").innerHTML= String('<img src="'+bgImage+'" width="300" class="border border-light">');
    
  }



}
