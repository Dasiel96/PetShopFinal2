import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appTestDir]'
})
export class TestDirDirective {

  @Input() set appTestDir(empty: any) {
    this.view.createEmbeddedView(this.temp_ref)
  }

  constructor(
    private temp_ref: TemplateRef<any>,
    private view: ViewContainerRef
  ) { }

}
