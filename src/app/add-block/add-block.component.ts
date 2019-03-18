import { Component, OnInit } from '@angular/core';
import { BlockService } from '../services/block.service';

@Component({
  selector: 'app-add-block',
  templateUrl: './add-block.component.html',
  styleUrls: ['./add-block.component.css']
})
export class AddBlockComponent implements OnInit {

  private listOfBlocks: Array<object>;

  constructor(private blockService: BlockService) { }

  ngOnInit() {
    this.listOfBlocks = this.blockService.getListOfBlocks();
  }

}
