import { Component, OnInit } from '@angular/core';
import {PhotoService} from '../photo.service';
import {Photo} from '../photo';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-photo-create',
  templateUrl: './photo-create.component.html',
  styleUrls: ['./photo-create.component.scss']
})
export class PhotoCreateComponent implements OnInit {

  successMessage: string;
  failMessage: string;

  constructor(private photoService: PhotoService) {
  }

  ngOnInit() {
  }

  addPhoto(photoForm) {
    this.photoService.createPhoto(photoForm.value).subscribe(() => {
      this.successMessage = 'Tạo mới thành công';
    }, () => {
      this.failMessage = 'Tạo mới thất bại';
    });
  }

}
