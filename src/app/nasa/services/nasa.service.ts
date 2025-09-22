import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {Neo} from '../interfaces/nasa.interfaces'
import {catchError, throwError} from 'rxjs'

interface Apod {}

@Injectable({
  providedIn: 'root',
})
export class NasaService {
  private _dates: any[] = []
  private _apodObj: any
  private _apiKey: string = 'LZ4zl3U03iPqY14cRyc4bpK5eq0LnUIswS7B1SrE'
  private _api: string = 'https://api.nasa.gov/planetary'

  constructor(private http: HttpClient) {}

  get dates() {
    return [...this._dates]
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
      .get<Apod>(`${this._api}/apod`, {params, headers})
      .subscribe({
        next: a => (this._apodObj = a),
        error: error => {
          console.log('get error apod')
        },
      })
  }

  /**
   *
   * @param date Fecha seleccionada en el input date
   */
  buscarNeo(date: string) {
    const url = 'https://api.nasa.gov/neo/rest/v1/feed'

    const params = new HttpParams()
      .set('api_key', 'LZ4zl3U03iPqY14cRyc4bpK5eq0LnUIswS7B1SrE')
      .set('start_date', date)
      .set('end_date', date)

    return this.http.get<any>(url, {params}).subscribe({
      next: respuesta => {
        this._dates = respuesta.near_earth_objects[date]
        console.log('NEOs encontrados:', this._dates)
      },
      error: err => {
        console.error('Error en petición NEOWS:', err)
      },
    })
  }
}
