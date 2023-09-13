import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-info',
  templateUrl: './game-info.component.html',
  styleUrls: ['./game-info.component.scss']
})
export class GameInfoComponent implements OnInit, OnChanges {
  cardAction= [
      { title: "Everybody", description: "All players must drink."},
      { title: "Rule", description: "Make a rule that all players must follow." },
      { title: "Question", description: "Ask a question to another player."},
      { title: "You", description: "You must drink." },
      { title: "Waterfall", description: "Start a waterfall. Everyone keeps drinking until the person to their right stops."},
      { title: "Rhyme", description: "Say a word. Everyone else must say a word that rhymes."},
      { title: "Mate", description: "Pick a mate. Your mate must drink when you drink for the rest of the game."},
      { title: "Sky", description: "Point to the sky. Last one to do so drinks."},
      { title: "Men", description: "All men drink."},
      { title: "Dance", description: "Do a dance. If it's bad, drink."},
      { title: "Women", description: "All women drink."},
      { title: "Sips", description: "Take three sips."},
      { title: "Choose", description: "You pick someone to drink."}
  ];

  title: string ='';
  description: string = '';
  @Input() card!: string;

  constructor(){}
  ngOnInit(): void {
    
  }
  ngOnChanges(): void {
    if (this.card){
      let cardNumber = +this.card.split('_')[1];
      this.title = this.cardAction[cardNumber - 1].title;
      this.description = this.cardAction[cardNumber - 1].description;
    }
  }

}
