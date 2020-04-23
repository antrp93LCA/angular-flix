import { Injectable } from "@angular/core";

// yes, I noticed I added 'service' in the name of the services,
// but lets just say it won't happen again after this fluke :)
import { ApiServiceService } from "../services/api-service.service";
import { MovieApiService } from "../services/movie-api.service";

@Injectable({
  providedIn: "root",
})
export class MovieServicesService {
  searchResult: any[] = [];
  myMovieList: any[] = [];

  constructor(
    private apiService: ApiServiceService,
    private movieApiService: MovieApiService
  ) {}

  getSearchResults(): any[] {
    return this.searchResult;
  }

  getMovieList(): any[] {
    return this.myMovieList;
  }

  async searchForMovies(search: string) {
    const reponse = await this.movieApiService.get(search);

    this.searchResult.length = 0;
    this.searchResult.push(...reponse.results);
  }

  async loadMovieList() {
    const results = await this.apiService.get();
    this.myMovieList.length = 0;
    this.myMovieList.push(...results);
  }

  async saveToList(movie: any ){
    this.apiService.post(movie);
    this.loadMovieList();
  }
}
