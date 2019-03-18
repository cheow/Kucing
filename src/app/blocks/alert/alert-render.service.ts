import { Injectable } from '@angular/core';
import { BlockRendererInterface } from '../../interfaces/block-renderer-interface';
import { BlockDataInterface } from '../../interfaces/block-data-interface';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class AlertRenderService implements BlockRendererInterface {

  id: string = 'alert';
  name: string = 'Alert';
  blockData;
  

  constructor(private sanitiser: DomSanitizer) { }

  load(blockData: BlockDataInterface): void {
    this.blockData = blockData;
  }

  render(): SafeHtml{

    let out = `<div id="${ this.blockData.data.id }" class="alert alert-${ this.blockData.data.style }">${ this.blockData.data.text }</div>`;

    return this.sanitiser.bypassSecurityTrustHtml(out);
  }

}
