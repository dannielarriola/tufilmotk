import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class DbService {
  private urljson = 'movies.json'; 
  constructor(private http: Http) { }

  getData() : Observable<any>{
    return this.http.get(this.urljson)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  private extractData(res: Response) {
    console.log(res.json());
    return res.json() || { };
  }
  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
