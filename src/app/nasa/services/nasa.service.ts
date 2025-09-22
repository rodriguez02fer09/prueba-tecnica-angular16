import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {Neo, Apod, CmeEvent} from '../interfaces/nasa.interfaces'

@Injectable({
  providedIn: 'root',
})
export class NasaService {
  private _apodObj: any
  private _neos: any[] = []
  private _apiKey: string = 'LZ4zl3U03iPqY14cRyc4bpK5eq0LnUIswS7B1SrE'
  private _api: string = 'https://api.nasa.gov'

  constructor(private http: HttpClient) {}

  get neos() {
    return [...this._neos]
  }

  get apod() {
    return this._apodObj
  }

  private getRandom1to7(): number {
    return Math.floor(Math.random() * 7) + 1
  }

  private getRandomDateFromLast7Days(offsetDays: number): string {
    const today = new Date()

    today.setDate(today.getDate() - offsetDays)

    const year = today.getFullYear()
    const month = String(today.getMonth() + 1).padStart(2, '0')
    const day = String(today.getDate()).padStart(2, '0')

    return `${year}-${month}-${day}`
  }

  getApod() {
    const offsetDays = this.getRandom1to7()

    const randomDate = this.getRandomDateFromLast7Days(offsetDays)

    const params = new HttpParams()
      .set('api_key', this._apiKey)
      .set('date', randomDate)

    const headers = new HttpHeaders().set('Accept', 'application/json')

    return this.http
      .get<Apod>(`${this._api}/planetary/apod`, {params, headers})
      .subscribe({
        next: result => (this._apodObj = result),
        error: error => {
          console.log(`get error apod ${error}`)
        },
      })
  }

  /**
   *
   * @param date Fecha seleccionada en el input date
   */
  buscarNeo(date: string) {
    const params = new HttpParams()
      .set('api_key', this._apiKey)
      .set('start_date', date)
      .set('end_date', date)

    return this.http
      .get<Neo>(`${this._api}/neo/rest/v1/feed`, {params})
      .subscribe({
        next: respuesta => {
          this._neos = respuesta.near_earth_objects[date]
        },
        error: err => {
          console.error('Error en petición NEOWS:', err)
        },
      })
  }

  getDonkiCme(startDate: string, endDate: string) {
    const apiUrl = `${this._api}/DONKI/CME`

    const params = new HttpParams()
      .set('api_key', this._apiKey)
      .set('startDate', startDate)
      .set('endDate', endDate)

    return this.http.get<CmeEvent[]>(apiUrl, {params})
  }
}
