import { Component, OnInit, Input } from '@angular/core';
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
  static typing = '';
  static result = [];

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

  onKey(event: KeyboardEvent) { // with type info
    SearcherComponent.result = [];
    var count = 1;
    _.forEach(this.datajson, function (item) {
      if (count < 100) {
        //console.log(item);
        if (item.title.toLowerCase().indexOf(SearcherComponent.typing) !== -1 ||
          item.title_english.toLowerCase().indexOf(SearcherComponent.typing) !== -1 ||
          item.title_long.toLowerCase().indexOf(SearcherComponent.typing) !== -1 ||
          item.imdb_code.toLowerCase().indexOf(SearcherComponent.typing) !== -1 ||
          item.title_english.toLowerCase().indexOf(SearcherComponent.typing) !== -1 ||
          item.year.toString() == SearcherComponent.typing
        ) {
          SearcherComponent.result.push(item);
          count++;
          console.log(SearcherComponent.result);
        }
      } else {
        return false;
      }
    });
  }

}
