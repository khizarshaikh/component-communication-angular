/**
 * Author: Khizar Shaikh
 */
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { CommunicationServiceService } from '../communication-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  /** used to get message from parent to child */
  @Input() childMessage: string;
  /** used to output message from child to parent  */
  @Output() messageEvent = new EventEmitter<string>();
  /** child component propert */
  childProperty: string;


  constructor(private communicationService: CommunicationServiceService, private router: Router) {
    this.childProperty = 'Hey i am coming from child component';
  }

  ngOnInit() { }

  /** This method would get called when click button of child component is cliked and will
   *  emit output event to parents component
   */
  sendMessageToParent() {
    this.communicationService.messageFromAnyComponent = this.childProperty;
    this.messageEvent.emit(this.childProperty);
    this.router.navigate(['/sibling']);
  }
}
