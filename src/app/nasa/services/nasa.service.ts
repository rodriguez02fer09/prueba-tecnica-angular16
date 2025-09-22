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
    // 1. Obtener la fecha actual
    const today = new Date()

    // 2. Restar los días aleatorios (valor obtenido en Paso 1)
    today.setDate(today.getDate() - offsetDays)

    // 3. Formatear a YYYY-MM-DD (formato que pide la API)
    const year = today.getFullYear()
    const month = String(today.getMonth() + 1).padStart(2, '0')
    const day = String(today.getDate()).padStart(2, '0')

    return `${year}-${month}-${day}`
  }

  getApod() {
    /**
     * Paso 1
     * Almacene en una variable un número aleatorio entre 1 y 7
     */

    const offsetDays = this.getRandom1to7()

    /**
     * Paso 2
     * Fecha aleatoria entre últimos 7 días
     * Obtenga y almacene en una variable la fecha actual
     * A los días de la fecha actual le debe restar el número obtenido en el Paso 1 para obtener una fecha aleatoria de los últimos 7 días
     */

    const randomDate = this.getRandomDateFromLast7Days(offsetDays)

    /**
     * Paso 3
     * petición APOD endpoint
     * consulte el endpoint https://api.nasa.gov/planetary/apod enviando los parámetros:
     * date = fecha obtenida en el Paso 2 en formato YYYY-MM-DD
     * api_key = su API KEY generado en el sitio web https://api.nasa.gov/
     * Debe asignar el valor de la respuesta del endpoint a la variable global _apod que ya se encuentra declarada, ejemplo: this._apodObj = respuesta;
     */

    const params = new HttpParams()
      .set('api_key', this._apiKey)
      .set('date', randomDate)

    // headers opcionales
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
    /**
     * Paso 1
     * petición NEOWS endpoint
     * consulte el endpoint https://api.nasa.gov/neo/rest/v1/feed enviando los parámetros:
     * api_key = su API KEY generado en el sitio web https://api.nasa.gov/
     * start_date = parámetro date recibido en la función en formato YYYY-MM-DD.
     * end_date = parámetro date recibido en la función en formato YYYY-MM-DD.
     * Nota: para start_date y end_date se utiliza el mismo valor el cual llega como parámetro de la función.
     * Debe asignar el valor de la respuesta del endpoint a la variable global _dates, ejemplo: this._dates = respuesta.near_earth_objects[date], siendo [date] el parámetro que recibe la función;
     */
  }
}
