import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlbumService } from './album.service';
import { HttpClientModule }    from '@angular/common/http';
import { AppComponent } from './app.component';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { AppRoutingModule } from './/app-routing.module';
import { FormsModule }   from '@angular/forms';
import { FilterPipe } from './filter.pipe';
import { OrderByPipe } from './order-by.pipe';


@NgModule({
  declarations: [
    AppComponent,
    AlbumsComponent,
    AlbumDetailsComponent,
    FilterPipe,
    OrderByPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [AlbumService, FilterPipe,OrderByPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
