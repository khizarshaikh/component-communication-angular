import { Component, OnInit } from '@angular/core';
import { CommunicationServiceService } from '../communication-service.service';

@Component({
  selector: 'app-sibling',
  templateUrl: './sibling.component.html',
  styleUrls: ['./sibling.component.scss']
})
export class SiblingComponent implements OnInit {
  messageFromService: string;
  constructor(private communicationService: CommunicationServiceService) { }

  ngOnInit() {

    /** Subscribing from behaviour subject */
    this.communicationService.dataFromService.subscribe((data) => {
      this.messageFromService = data;
    });


    /** Simple service */
    // this.messageFromService = this.communicationService.dataFromService;

  }

}
