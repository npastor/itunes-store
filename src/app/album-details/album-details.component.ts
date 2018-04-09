import { Component, OnInit, Input } from '@angular/core';
import { AlbumService } from '../album.service';
import { ActivatedRoute } from '@angular/router';
import  { TrackDetails } from "../track-details";


@Component({
  selector: 'app-album-details',
  templateUrl: './album-details.component.html',
  styleUrls: ['./album-details.component.scss']
})
export class AlbumDetailsComponent implements OnInit {
  trackDetails : TrackDetails[];
  albumDetail : TrackDetails;
  slide1_URL : string = '/assets/images/slide_1.jpg';
  slide2_URL : string = '/assets/images/slide_2.jpg';
  slide3_URL : string  = '/assets/images/slide_3.jpg';

  constructor(private albumService: AlbumService, private route: ActivatedRoute) { }

  ngOnInit() {
   this.getSelectedAlbumDetails();
  }

  getSelectedAlbumDetails(): void {
      const collectionId = +this.route.snapshot.paramMap.get('collectionId');
      this.albumService.getAlbumTrackList(collectionId).subscribe( data => {
      this.albumDetail = data.find(x => x.wrapperType == 'collection');
      this.trackDetails = data.filter(x => x.wrapperType == 'track') ;
    });

  }


}
