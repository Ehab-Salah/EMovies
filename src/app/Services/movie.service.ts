import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieItem } from './movie-item';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http:HttpClient) { 

  }
  getPopularMovies(type:string="popular",page:number=1):Observable<Object>{

    //return this.http.get("http://localhost:3000/Products");
    return  this.http.get<Object>(`https://api.themoviedb.org/3/movie/${type}?language=en-US&page=${page}&api_key=212f60f18fc815a93eae6edc994ba3da`);

  }

  getActors(page:number=1):Observable<Object>{
    return this.http.get<Object>(`https://api.themoviedb.org/3/person/popular?language=en-US&page=${page}&api_key=212f60f18fc815a93eae6edc994ba3da`);

  }
  getTVShow(page:number=1):Observable<Object>{

    //return this.http.get("http://localhost:3000/Products");
    return  this.http.get<Object>(`https://api.themoviedb.org/3/discover/tv?&page=${page}&api_key=212f60f18fc815a93eae6edc994ba3da`);

  }
 
}
