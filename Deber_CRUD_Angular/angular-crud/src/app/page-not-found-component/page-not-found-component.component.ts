import { Component } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  template: `
    <div class="min-h-screen flex flex-col items-center justify-center bg-white-900 text-blue">
      <h1 class="text-6xl font-extrabold mb-4">404</h1>
      <p class="text-2xl mb-8">La página que buscas no funciona</p>
      <p class="text-2xl mb-7">Llamen a Dios</p>

    </div>
  `,
  styleUrls: []
})
export class PageNotFoundComponent {}
