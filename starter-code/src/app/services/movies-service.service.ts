import { Injectable } from '@angular/core';
import { MOVIES } from './Movies';
import { CinemaRoom } from '../domain/cinema-room';


@Injectable()
export class MoviesServiceService {

  constructor() { }

  getMovies(): Array<CinemaRoom> {
    return MOVIES;
  }

  getMovie(id) {
    return MOVIES.find(room => room.id === id);
  }

}
