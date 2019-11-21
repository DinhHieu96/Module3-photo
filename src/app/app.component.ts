import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {Photo} from './photo';
import {PhotoService} from './photo.service';
import {error} from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'photo';
}
