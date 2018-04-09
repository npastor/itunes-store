import { Component, OnInit } from '@angular/core';
import { Album } from '../album';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.scss']
})
export class AlbumsComponent implements OnInit {
  albums : Album[] ;
  music_URL : string = '/assets/images/music.jpg';
  column: string = "collectionName";
  direction: number;
  isDesc: boolean = false;

  constructor(private albumService: AlbumService) { }

  ngOnInit() {
    this.getAlbums();
  }

  getAlbums() : void {
    this.albumService.getAlbums().subscribe( data => {
      this.albums = data 
    });
  }
 
sort(property){
    this.isDesc = !this.isDesc;     
    this.column = property;
    this.direction = this.isDesc ? 1 : -1;
}

  
 }
