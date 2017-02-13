import { Component, OnInit } from '@angular/core';
import { SearcherComponent } from '../searcher/searcher.component';

@Component({
  selector: 'tf-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
  providers: [SearcherComponent]
})
export class ResultComponent implements OnInit {
  
  SearcherComponent = SearcherComponent;

  constructor(private search: SearcherComponent) { }

  ngOnInit() {
    console.log(SearcherComponent.result);
  }

}
