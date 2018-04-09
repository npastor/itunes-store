import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Album } from './album';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import  { TrackDetails } from "./track-details";


@Injectable()
export class AlbumService {

private albumURL = 'http://itunes.apple.com/search?term=Beatles&entity=album';
private albumDetailsURL = 'http://itunes.apple.com/lookup?entity=song&id=';

  constructor(private http: HttpClient) { }

  getAlbums (): Observable<Album[]> {
  	return this.http.get<Album[]>(this.albumURL).map(res=> res['results'] );
  }


  getAlbumTrackList (id : number): Observable<TrackDetails[]> {
  	return this.http.get<TrackDetails[]>(this.albumDetailsURL + id).map(res=> res['results'] );
  }

  }
