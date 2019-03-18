import { Injectable } from "@angular/core";
import { BlockDataInterface } from "../interfaces/block-data-interface";

@Injectable({
  providedIn: "root"
})
export class CanvasDataService {
  public data: Array<BlockDataInterface> = [];

  constructor() {}

  add(newBlock: BlockDataInterface): void {
    this.data.push(newBlock);
  }

  replace(newBlock: BlockDataInterface): void {
    let oldBlock = this.data.find(block => block.id === newBlock.id);
    let index = this.data.indexOf(oldBlock);
    this.data[index] = newBlock;
  }
}
