import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MoviesService} from '../services/movies.service';
import {CinemaRoom} from '../domain/cinema-room';

@Component({
  selector: 'app-my-movie',
  templateUrl: './my-movie.component.html',
  styleUrls: ['./my-movie.component.css']
})
export class MyMovieComponent implements OnInit {

  movieId: number;
  movie: CinemaRoom;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private moviesService: MoviesService) { }

  ngOnInit() {
    this.route.params
      .subscribe((params) => this.movieId = Number(params['id']));
    this.movie = this.moviesService.getMovie(this.movieId);
  }

  goHome() {
    this.router.navigate(['home']);
  }
}
