import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-quill-editor',
  templateUrl: './quill-editor.component.html',
  styleUrls: ['./quill-editor.component.css'],
})
export class QuillEditorComponent {
  @Input() public quillText: string = '';
  public blurred: boolean = false;
  public focused: boolean = false;

  public focus() {
    this.focused = true;
    this.blurred = false;
  }

  public blur() {
    this.focused = false;
    this.blurred = true;
  }
}
