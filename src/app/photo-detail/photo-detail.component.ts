import { Component, OnInit } from '@angular/core';
import {Photo} from '../photo';
import {Subscription} from 'rxjs';
import {PhotoService} from '../photo.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-photo-detail',
  templateUrl: './photo-detail.component.html',
  styleUrls: ['./photo-detail.component.scss']
})
export class PhotoDetailComponent implements OnInit {

  photo: Photo;
  sub: Subscription;
  constructor(
    private photoService: PhotoService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.sub = this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      const id = paramMap.get('id');
      this.photoService.detailPhoto(id).subscribe(next => {
        this.photo = next;
      }, error => {
        console.log(error);
      });
    });
  }

}
