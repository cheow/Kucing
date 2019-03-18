import { Component, OnInit } from "@angular/core";
import { BlockDataInterface } from "../interfaces/block-data-interface";
import { CanvasDataService } from "../services/canvas-data.service";
import { BlockService } from "../services/block.service";
import { SafeHtml } from "@angular/platform-browser";
import { Router } from "@angular/router";

@Component({
  selector: "app-canvas",
  templateUrl: "./canvas.component.html",
  styleUrls: ["./canvas.component.css"]
})
export class CanvasComponent implements OnInit {
  private blocks: Array<object>;
  private data: Array<BlockDataInterface>;

  constructor(
    private router: Router,
    private canvasDataService: CanvasDataService,
    private blockService: BlockService
  ) {}

  ngOnInit() {
    this.data = this.canvasDataService.data;
  }

  render(blockData: BlockDataInterface): SafeHtml {
    let block = this.blockService.loadBlock(blockData);
    return block.render();
  }

  edit(block: BlockDataInterface): void {
    let url = `/block/${block.blockId}/${block.id}`;
    this.router.navigate([url]);
  }

  delete(block: BlockDataInterface): void {
    this.data = this.data.filter(blockData => blockData.id !== block.id);
  }

  up(block: BlockDataInterface): void {
    let currentBlockIndex: number = this.data.indexOf(block);
    let nextBlockIndex: number = currentBlockIndex - 1;
    if (nextBlockIndex < 0) {
      return;
    }

    let temp = this.data[nextBlockIndex];
    this.data[nextBlockIndex] = block;
    this.data[currentBlockIndex] = temp;
  }
  down(block: BlockDataInterface): void {
    let currentBlockIndex: number = this.data.indexOf(block);
    let nextBlockIndex: number = currentBlockIndex + 1;
    if (nextBlockIndex >= this.data.length) {
      return;
    }

    let temp = this.data[nextBlockIndex];
    this.data[nextBlockIndex] = block;
    this.data[currentBlockIndex] = temp;
  }

  save(): void {}
  new(): void {}
  open(): void {}
  build(): void {}
}
