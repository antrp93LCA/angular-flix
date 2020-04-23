import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieApiService {
  readonly MOVIE_URL = 'https://api.themoviedb.org/3/'

  constructor(private httpClient: HttpClient) { }
}
