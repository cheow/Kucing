import { Injectable } from '@angular/core';
import { BlockDataInterface } from '../interfaces/block-data-interface';
import { BlockInterface } from '../interfaces/block-interface';
import { AlertRenderService } from '../blocks/alert/alert-render.service';
import { BlockRendererInterface } from '../interfaces/block-renderer-interface';

@Injectable({
  providedIn: 'root'
})
export class BlockService {

  private blocks: Array<BlockRendererInterface>;

  constructor(alertRenderer: AlertRenderService) {
    this.blocks = [
      alertRenderer
    ];
   }

  getListOfBlocks(): Array<object> {
    //TODO: Read blocks folder and generate list
    return this.blocks;
  }

  loadBlock(blockData: BlockDataInterface) {
    let loadedBlock = this.blocks.find(block => block.id == blockData.blockId);
    loadedBlock.load(blockData);

    return loadedBlock;
  }

}
