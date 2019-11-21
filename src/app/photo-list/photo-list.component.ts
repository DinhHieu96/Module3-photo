import { Component, OnInit } from '@angular/core';
import {Photo} from '../photo';
import {FormControl, FormGroup} from '@angular/forms';
import {PhotoService} from '../photo.service';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit {
  photoList: Photo[] = [] ;

  constructor(private photoService: PhotoService) { }
  photoForm: FormGroup = new FormGroup({
    title: new FormControl('')
  });

  ngOnInit() {
    this.photoService.getAllPhoto().subscribe(result => {
      this.photoList = result;
    });
  }

}
