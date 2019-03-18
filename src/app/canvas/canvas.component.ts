import { Component, OnInit } from "@angular/core";
import { BlockDataInterface } from "../interfaces/block-data-interface";
import { CanvasDataService } from "../services/canvas-data.service";
import { BlockService } from "../services/block.service";
import { SafeHtml } from "@angular/platform-browser";

@Component({
  selector: "app-canvas",
  templateUrl: "./canvas.component.html",
  styleUrls: ["./canvas.component.css"]
})
export class CanvasComponent implements OnInit {
  private blocks: Array<object>;
  private data: Array<BlockDataInterface>;

  constructor(
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

  save(): void {}
  new(): void {}
  open(): void {}
  build(): void {}
}
