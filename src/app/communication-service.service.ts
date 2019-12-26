/**
 * Author:- Khizar Shaikh
 */
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationServiceService {
  /** Normal service */
  // data: string;

  /** Used with behaviour subject */
  data: BehaviorSubject<string> = new BehaviorSubject('Default Message');
  _data: Observable<string> = this.data.asObservable();
  constructor() {
  }

  // set messageFromAnyComponent(data: string) {
  //   this.data = data;
  // }
  // get dataFromService() {
  //   return this.data;
  // }


  /**
   * Use case with Behaviour subject
   */

  set messageFromAnyComponent(data: string) {
    this.data.next(data);
  }
  get dataFromService() {
    return this._data;
  }
}
