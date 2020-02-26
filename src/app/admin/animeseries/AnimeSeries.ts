import { ThrowStmt } from '@angular/compiler';

export class AnimeSeries {
    id: number;
    englishTitle: string;
    type: string;
    episodes: number;
    releaseDate: string;
    finishDate: string;

    constructor(id: number, title: string, type: string, episodes: number, releaseDate: string, finishDate: string) {
        this.id = id;
        this.englishTitle = title;
        this.type = type;
        this.episodes = episodes;
        this.releaseDate = releaseDate;
        this.finishDate = finishDate;
    }
}