/**
 * Author:- Khizar Shaikh
 */
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  /** parents component property */
  parentMessage = 'Message from parent';
  /** property that holds message from childs component */
  childsMessage: string;

  /** use case with viewChild */
  // @ViewChild(ChildComponent) child: ChildComponent;
  constructor() { }

  ngOnInit() { }

  // ngAfterViewInit() {
  //   this.childsMessage = this.child.childProperty;
  // }


  /** This method is invoked when an output event is emitted from child component */
  receiveMessageFromParent(e: string) {
    console.log(`Message from child to parent:=> ${e}`);
  }
}
