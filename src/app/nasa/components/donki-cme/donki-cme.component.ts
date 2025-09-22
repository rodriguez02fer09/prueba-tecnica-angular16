import {Component} from '@angular/core'
import {NasaService} from '../../services/nasa.service'

@Component({
  selector: 'app-donki-cme',
  templateUrl: './donki-cme.component.html',
  styleUrls: ['./donki-cme.component.css'],
})
export class DonkiCmeComponent {
  startDate: string = ''
  endDate: string = ''
  cmes: any[] = []

  constructor(private nasaService: NasaService) {}

  loadCME() {
    if (!this.startDate || !this.endDate) {
      alert('Selecciona ambas fechas')
      return
    }

    this.nasaService.getDonkiCme(this.startDate, this.endDate).subscribe({
      next: data => (this.cmes = data),
      error: err => console.error('Error DONKI:', err),
    })
  }
}
