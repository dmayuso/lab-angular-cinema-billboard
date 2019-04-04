import { Component, OnInit } from '@angular/core';
import {CinemaRoom} from '../domain/cinema-room';
import {MoviesService} from '../services/movies.service';

@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.css']
})
export class MyHomeComponent implements OnInit {

  movies: Array<CinemaRoom>;

  constructor(private moviesService: MoviesService) { }

  ngOnInit() {
    this.movies = this.moviesService.getMovies().map((movie) => {
      movie.room = movie.id;
      return movie;
    });
  }

}
