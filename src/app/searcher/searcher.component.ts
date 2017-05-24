import { Component, OnInit, Input, Output } from '@angular/core';
import { DbService } from '../db.service';
import * as _ from 'lodash';

@Component({
  selector: 'tf-searcher',
  templateUrl: './searcher.component.html',
  styleUrls: ['./searcher.component.css'],
  providers: [DbService]
})
export class SearcherComponent implements OnInit {
  datajson = {};
  errorMessage: string;
  static typing = '';
  static result = [];
  dataloaded = false;

  constructor(private dbservice: DbService) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.dbservice.getData()
      .subscribe(
      datajson => {
        var sortedData = _.orderBy(datajson, ['year','rating'], ['desc','desc']);
        this.datajson = sortedData;
        this.dataloaded = true;
        console.log(sortedData);
        var count = 1;
        _.forEach(this.datajson, function (item: any) {
          if (count < 200) {
            SearcherComponent.result.push(item);
            count++;
          }
        })

      },
      error => this.errorMessage = <any>error
      );
  }

  onKey(event: KeyboardEvent) {
    SearcherComponent.result = [];
    var count = 1;
    var txtSearch = SearcherComponent.typing.toLowerCase();
    if (txtSearch == '') {
      this.getData();
    } else {
      _.forEach(this.datajson, function (item: any) {
        if (count < 200 && txtSearch.length >= 2) {
          if (item.title.toLowerCase().indexOf(txtSearch) !== -1 ||
            item.title_english.toLowerCase().indexOf(txtSearch) !== -1 ||
            item.title_long.toLowerCase().indexOf(txtSearch) !== -1 ||
            item.imdb_code.toLowerCase().indexOf(txtSearch) !== -1 ||
            item.title_english.toLowerCase().indexOf(txtSearch) !== -1 ||
            item.year.toString() == txtSearch
          ) {
            SearcherComponent.result.push(item);
            count++;
          }
        } else {
          return false;
        }
      });
    }

  }

  SearcherComponent = SearcherComponent;
}

