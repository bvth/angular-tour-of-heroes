import {Component, OnInit} from '@angular/core';
import {Hero} from "../hero";
import {HeroService} from "../hero.service";
import {MessageService} from "../message.service";

@Component({
	selector: 'app-heroes',
	templateUrl: './heroes.component.html',
	styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
	selectedHero?: Hero;
	heroes: Hero[] = [];

	constructor(private heroService: HeroService, private messageService: MessageService) {
	}

	onSelect(hero: Hero): void {
		this.selectedHero = hero;
		this.messageService.clear();
		this.messageService.add(`hero comp: id=${hero.id}`);
	}

	getHeroes(): void {
		this.heroService.getHeroes()
			.subscribe(heroes => this.heroes = heroes);
	}

	ngOnInit(): void {
		this.getHeroes();
	}
}
