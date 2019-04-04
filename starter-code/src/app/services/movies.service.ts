import { Injectable } from '@angular/core';
import { MOVIES } from './Movies';
import { CinemaRoom } from '../domain/cinema-room';


@Injectable()
export class MoviesService {

  constructor() { }

  getMovies(): Array<CinemaRoom> {
    return MOVIES;
  }

  getMovie(id): CinemaRoom {
    return MOVIES.find(room => room.id === id);
  }

}
