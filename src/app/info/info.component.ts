import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DbService } from '../db.service';
import * as _ from 'lodash';

@Component({
  selector: 'tf-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit, OnDestroy {
  private sub: any;
  static id: number;
  static title: string;
  static info: any = {};
  datajson = {};
  dataloaded = false;
  InfoComponent = InfoComponent;

  constructor(private route: ActivatedRoute, private dbservice: DbService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      InfoComponent.id = +params['id'];
      InfoComponent.title = params['title'];
      this.getRecord();
    });

  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  getRecord() {
    this.dbservice.getData()
      .subscribe(
      datajson => {
        _.forEach(datajson, function (item: any) {
          if (item.id == InfoComponent.id) {
            InfoComponent.info = item;
            console.log(item);
            return false;
          }
        });
      },

    );
  }

}

