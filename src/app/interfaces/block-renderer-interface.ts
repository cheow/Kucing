import { SafeHtml } from '@angular/platform-browser';
import { BlockDataInterface } from './block-data-interface';

export interface BlockRendererInterface {

    id: string;
    name: string;

    load(blockData: BlockDataInterface): void;
    render(): SafeHtml;
}
