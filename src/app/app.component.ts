import { Component, ViewChild, ElementRef } from '@angular/core';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular';

  @ViewChild('content') content: ElementRef;

  makePdf() {
    const texto = '<h1>Teste</h1>';
    const pdf = new jsPDF({ orientation: 'portrait', format: 'a4' });

    pdf.html(texto, {
      callback(doc) {
        doc.save('teste.pdf');
      },
      x: 10,
      y: 10,
      margin: [50, 30, 50, 30],
      autoPaging: 'text',
      width: 297,
      windowWidth: 210,
    });
  }
}
