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

  


  async getData(){    // fetches data from API & organizes into arrays to output in HTML

    const api_url ='https://api.boardgameatlas.com/api/search?client_id=t8RLkXvzon'
    const response = await fetch(api_url);
    const data = await response.json();

    let randNum = Math.floor((Math.random() * 100)); //generates random number used for index
    let bgTitle = [];       // contains board game title
    let bgImage = [];       // contains board game image
    let bgMinPlayers = [];  // contains min number of players
    let bgMaxPlayers =[];   // contains max number of players
    let bgMaxTime = [];     // contains max play time in minutes
    let bgDescrip = [];     // contains a shorter description/summary
    let bgaURL = [];        // contains URL to the game on Board Game Atlas

      // these take the value from randNum index and pushes into above arrays
    bgTitle.push(data.games[randNum].name);
    bgImage.push(data.games[randNum].thumb_url);
    bgMinPlayers.push(data.games[randNum].min_players);
    bgMaxPlayers.push(data.games[randNum].max_players);
    bgMaxTime.push(data.games[randNum].max_playtime);
    bgaURL.push(data.games[randNum].url);
    bgDescrip.push(data.games[randNum].description_preview);

    // TEST IN CONSOLE
    //console.log(bgaURL);      
    //console.log(bgImage);

      // to send to HTML component
    document.getElementById("bgTitle").innerHTML = String(bgTitle + ' &nbsp;<a href="' + bgaURL +'" target="_blank"><img src="https://www.flaticon.com/svg/vstatic/svg/813/813300.svg?token=exp=1612983725~hmac=1d7662d69341aa8c25ba9c630bc9a23b" width="15" height="15" alt="Board Game Atlas"></a> <a href="https://www.amazon.com/s?k='+ bgTitle +' board game" target="_blank"> &nbsp;<img src="https://cdn4.iconfinder.com/data/icons/social-media-and-logos-11/32/Logo_amazon-512.png" width="15" height="15"></a>');
    document.getElementById("bgPlayers").innerHTML = String('# of Players: ' + bgMinPlayers + ' - ' + bgMaxPlayers);
    document.getElementById("bgTime").innerHTML = String('Play Duration: ~ ' + bgMaxTime + ' minutes');
    document.getElementById("bgDescrip").innerHTML = String('<span class="text-secondary h5">Description:</span><br>' + bgDescrip);
    document.getElementById("bgThumbnail").innerHTML= String('<img src="'+bgImage+'" width="300" class="border border-light">');
    
  }



}
