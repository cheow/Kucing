import { SafeHtml, DomSanitizer } from '@angular/platform-browser';

export interface BlockInterface {
    id: string;
    name: string;
    options: object;

    render(): SafeHtml;
    validation(): boolean;
}
