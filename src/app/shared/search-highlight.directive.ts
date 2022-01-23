import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appSearchHighlight]'
})
export class SearchHighlightDirective {

  @Input() value:string = '';

  @Input() searchText: string = '';

  constructor(private elRef : ElementRef) { }

  ngOnChanges(){
    if(this.searchText.trim() === ''){
      this.elRef.nativeElement.innerHTML = this.value;
    }else{
      this.setHighlightToText();
    }
  }

  setHighlightToText(){
    let text = this.value;
    const regexExp = new RegExp(this.searchText.trim(), 'gi');
    text = text.replace(regexExp, '<b>$&</b>');

    this.elRef.nativeElement.innerHTML = text;
  }

}
