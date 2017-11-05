import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise';
<<<<<<< HEAD
import { History } from '../../../server/models/classes/index';
=======
import { History } from '../../../server/models/index'
>>>>>>> 3548be955b07c178ea3df074bfecbdd945b2aa34

@Injectable()
export class HistoryService {

    constructor(private http: Http) { }

<<<<<<< HEAD
=======
    getAllHistories() {
      return new Promise((resolve, reject) => {
        this.http.get('/api/history')
          .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
      });
    }

    getHistory(params) {
      return new Promise((resolve, reject) => {
          console.log("serv params", params);
          this.http.post('/api/history/params', params)
            .map(res => res.json())
            .subscribe(res => {
              resolve(res)
          }, (err) => {
            reject(err);
          });
      });
    }

>>>>>>> 3548be955b07c178ea3df074bfecbdd945b2aa34
    getHistoryById(id) {
      return new Promise((resolve, reject) => {
          this.http.get('/api/history/' + id)
            .map(res => res.json())
            .subscribe(res => {
              resolve(res)
          }, (err) => {
            reject(err);
          });
      });
    }

    createHistory(data) {
      return new Promise((resolve, reject) => {
          this.http.post('/api/history', data)
            .map(res => res.json())
            .subscribe(res => {
              resolve(res);
            }, (err) => {
              reject(err);
            });
      });
    }

    updateHistory(id, data) {
      return new Promise((resolve, reject) => {
          this.http.put('/api/history/' + id, data)
            .map(res => res.json())
            .subscribe(res => {
              resolve(res);
            }, (err) => {
              reject(err);
            });
      });
    }

    deleteHistory(id) {
      return new Promise((resolve, reject) => {
          this.http.delete('/api/history/' + id)
            .subscribe(res => {
              resolve(res);
            }, (err) => {
              reject(err);
            });
      });
    }
}
