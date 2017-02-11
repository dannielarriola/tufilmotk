import { Component, OnInit } from '@angular/core';
import { DbService } from '../db.service';
import * as _ from 'lodash';

@Component({
  selector: 'tf-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css']
})
export class SearcherComponent implements OnInit {
  datajson = {};
  errorMessage: string;

  constructor(private dbservice: DbService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.dbservice.getData()
      .subscribe(
      datajson => this.datajson = datajson,
      error => this.errorMessage = <any>error
      );
  }

}
