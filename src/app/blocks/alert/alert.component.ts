import { Component, OnInit } from "@angular/core";
import { BlockInterface } from "../../interfaces/block-interface";
import { SafeHtml } from "@angular/platform-browser";
import { CanvasDataService } from "../../services/canvas-data.service";
import { Router, ActivatedRoute } from "@angular/router";
import { BlockDataInterface } from "../../interfaces/block-data-interface";

@Component({
  selector: "app-alert",
  templateUrl: "./alert.component.html",
  styleUrls: ["./alert.component.css"]
})
export class AlertComponent implements OnInit, BlockInterface {
  id: string = "alert";
  name: string = "Alert";
  blockDataId: string;
  blockData: BlockDataInterface;

  options: object = {
    text: "Sample text",
    style: "info"
  };

  constructor(
    private canvasDataService: CanvasDataService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.blockDataId = this.route.snapshot.paramMap.get("id");
  }

  ngOnInit() {
    this.loadData();
  }

  loadData(): void {
    if (this.blockDataId) {
      this.blockData = this.canvasDataService.data.find(
        blockData => blockData.id == this.blockDataId
      );
      this.options = this.blockData.data;
    }
  }

  validation(): boolean {
    return true;
  }

  save(): void {
    if (!this.validation) {
      return;
    }

    if (this.blockDataId) {
      this.replace();
      this.router.navigate(["/"]);
      return;
    }

    this.add();
    this.router.navigate(["/"]);
    return;
  }

  add():void {
    this.canvasDataService.add({
      id: Math.random()
        .toString(36)
        .substr(2, 9),
      blockId: this.id,
      data: this.options
    });
  }

  replace(): void {
    this.canvasDataService.replace({
      id: this.blockDataId,
      blockId: this.id,
      data: this.options
    });
  }


  delete(): void {}
  cancel(): void {}
}
