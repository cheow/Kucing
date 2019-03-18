import { Component, OnInit } from "@angular/core";
import { BlockInterface } from "../../interfaces/block-interface";
import { SafeHtml } from "@angular/platform-browser";
import { CanvasDataService } from "../../services/canvas-data.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-alert",
  templateUrl: "./alert.component.html",
  styleUrls: ["./alert.component.css"]
})
export class AlertComponent implements OnInit, BlockInterface {
  id: string = "alert";
  name: string = "Alert";

  options: object = {
    text: "Sample text",
    style: "info"
  };

  constructor(
    private canvasDataService: CanvasDataService,
    private router: Router
  ) {}

  ngOnInit() {}

  render(): SafeHtml {
    return "test";
  }

  loadData(): void {}

  validation(): boolean {
    return true;
  }

  save(): void {
    if (!this.validation) {
      return;
    }

    this.canvasDataService.add({
      id: Math.random()
        .toString(36)
        .substr(2, 9),
      blockId: this.id,
      data: this.options
    });

    this.router.navigate(["/"]);
  }
  delete(): void {}
  cancel(): void {}
}
