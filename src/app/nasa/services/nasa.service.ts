import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Neo } from '../interfaces/nasa.interfaces';

@Injectable({
  providedIn: 'root'
})
export class NasaService {

  private _dates: any[] = [];
  private _apodObj: any

  constructor(private http: HttpClient) { }

  get dates() {
    return [...this._dates];
  }

  get apod() {
    return this._apodObj;
  }

  getApod() {
    /**
     * Paso 1
     * Almacene en una variable un número aleatorio entre 1 y 7
     */

    

    /**
     * Paso 2
     * Fecha aleatoria entre últimos 7 días
     * Obtenga y almacene en una variable la fecha actual
     * A los días de la fecha actual le debe restar el número obtenido en el Paso 1 para obtener una fecha aleatoria de los últimos 7 días
     */
    


    /**
     * Paso 3
     * petición APOD endpoint
     * consulte el endpoint https://api.nasa.gov/planetary/apod enviando los parámetros:
     * date = fecha obtenida en el Paso 2 en formato YYYY-MM-DD
     * api_key = su API KEY generado en el sitio web https://api.nasa.gov/
     * Debe asignar el valor de la respuesta del endpoint a la variable global _apod que ya se encuentra declarada, ejemplo: this._apodObj = respuesta;
     */

    
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
