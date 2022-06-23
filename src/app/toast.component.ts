import { Component, Input } from '@angular/core';

@Component({
  selector: 'toast-component',
  template: `
      <div class="toast-container position-fixed bottom-0 end-0 p-3">
        <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
          <div class="toast-header">
            <strong class="me-auto">
              {{ title }}
            </strong>
            <small> {{ label }} </small>
            <button type="button" class="btn-close" data-bs-dismiss="toast"></button>
          </div>
          <div class="toast-body">
            {{ body }}
          </div>
        </div>
      </div>`,
})
export class ToastComponent {
  @Input() title = '';
  @Input() label = '';
  @Input() body = '';
}
