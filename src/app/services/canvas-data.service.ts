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
}
