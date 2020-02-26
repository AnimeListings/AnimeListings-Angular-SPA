import { Component, OnInit } from '@angular/core';
import { AnimeSeries } from '../AnimeSeries';
import { AnimeService } from 'src/app/services/anime.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  public series: AnimeSeries;

  constructor(private animeService: AnimeService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    var id = Number.parseInt(this.route.snapshot.paramMap.get('id'));
    this.getSeries(id);
  }

  public getSeries(id: number = 0) {
    if (id < 1) {
      return;
    }

    this.animeService.getAnimeDetails(id).subscribe(data => {
      this.series = new AnimeSeries(data['id'], data['englishTitle'], data['type'], data['episodes'], 
        this.getDate(new Date(data['releaseDate'])), this.getDate(new Date(data['finishDate'])));
    });
  }

  public getDate(date: Date): string {
    if (date === null) {
      return;
    }
    var formattedDate: string[] = date.toISOString().split('T');
    return formattedDate[0];
  }

}