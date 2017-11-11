import { Component, OnInit } from '@angular/core';
import { HeroesService } from "../../services/heroes.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes:any[] = [];
  loading:boolean = true;

  constructor( private _heroesService:HeroesService) {

    this._heroesService.getHeroes()
        .subscribe( heroes => {
          setTimeout ( () => {
            this.heroes = heroes;
            this.loading = false;
          }, 1500)
        });
  }

  ngOnInit() {
  }

  borrarHeroe(key$:string){

    this._heroesService.borrarHeroe(key$)
        .subscribe(res => {
          if (res) {
            console.log(res);
          }else {
            // Todo bien
            delete this.heroes[key$];
          }

        });
  }

}
