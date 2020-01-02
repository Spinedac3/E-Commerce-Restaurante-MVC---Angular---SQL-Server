import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { Orden, Item, Tarjeta } from './order';
import { IProduct } from './producto';
import { Data } from '@angular/router';
import { BodyWeb } from './BodyWeb';



@Injectable({
  providedIn: 'root'
})
export class ProductService {
    private UrlEntradas = '/api/producto/1';
    private UrlCafe =  '/api/producto/2';
    private urlJugos = "/api/producto/3";
    private urlVinos = "/api/producto/4";
    private urlLicores = "/api/producto/5";
    private urlDesayunos = "/api/producto/6";
    private urlPancakes =  "/api/producto/7";
    private urlSandwiches = "/api/producto/8";
    private urlPastas = "/api/producto/9";
    private urlHamburguesas = "/api/producto/10";
    private urlEnsaladas = "/api/producto/11";
  constructor(private http: HttpClient) { }
    private Web = 'https://us-east-1.aws.webhooks.mongodb-stitch.com/api/client/v2.0/app/hackathon-gmoid/service/API/incoming_webhook/analitica';
  public order: Orden = new Orden();

    private token: string = "";
    private tokenExpiration: Date = new Date();
    public ruta: string = "";

  getEntradas(): Observable<IProduct[]>{
        return this.http.get<IProduct[]>(this.UrlEntradas)
    .pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
  getCafes(): Observable<IProduct[]>{
    return this.http.get<IProduct[]>(this.UrlCafe)
    .pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
  getJugos(): Observable<IProduct[]>{
    return this.http.get<IProduct[]>(this.urlJugos)
    .pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
  getVinos(): Observable<IProduct[]>{
    return this.http.get<IProduct[]>(this.urlVinos)
    .pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
  getLicores(): Observable<IProduct[]>{
    return this.http.get<IProduct[]>(this.urlLicores)
    .pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
  getDesayunos(): Observable<IProduct[]>{
    return this.http.get<IProduct[]>(this.urlDesayunos)
    .pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
  getPancakes(): Observable<IProduct[]>{
    return this.http.get<IProduct[]>(this.urlPancakes)
    .pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
  getSandwiches(): Observable<IProduct[]>{
    return this.http.get<IProduct[]>(this.urlSandwiches)
    .pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
  getPastas(): Observable<IProduct[]>{
    return this.http.get<IProduct[]>(this.urlPastas)
    .pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
  getHamburguesas(): Observable<IProduct[]>{
    return this.http.get<IProduct[]>(this.urlHamburguesas)
    .pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
  getEnsaldas(): Observable<IProduct[]>{
    return this.http.get<IProduct[]>(this.urlEnsaladas)
    .pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

    getTarjeta(id: number): Observable<Tarjeta> {
        return this.http.get<Tarjeta>("/api/tarjeta/" + id)
            .pipe(
                tap(data => console.log('All: ' + JSON.stringify(data))),
                catchError(this.handleError)
            );
    }
  public añadirAOrden(product: IProduct) {
        let item: Item = this.order.items.find(i => i.producto.id == product.id);
        
        if (item) {
            item.cantidad++;

        } else {
            item = new Item();
            item.producto = product;
            item.cantidad = 1;

           this.order.items.push(item);
        }


  }

  public get loginRequired(): boolean {
       return this.token.length == 0 || this.tokenExpiration > new Date();
  }

  public login(creds) {
      return this.http.post("/cuenta/CreateToken", creds)
            .pipe(
                map((response: any) => {
                    let tokenInfo = response;
                    this.token = tokenInfo.token;
                    this.tokenExpiration = tokenInfo.expiration;
                    return true;
                }));
  }

    public crearOrden() {
        var fecha: Date = new Date();
        if (!this.order.numeroOrden) {
            this.order.numeroOrden = Math.round(Math.random()).toString() + fecha.getTime().toString();
        }
        return this.http.post("/api/order", this.order, {
            headers: new HttpHeaders({ "Authorization": "Bearer " + this.token })
        })
            .pipe(
                map((response:any )=> {
                 
                    let headerInfo = response;
                    this.ruta = response.ruta;
                    console.log(headerInfo);
                    return true;
                }));
    }

    public PostWeb(body: BodyWeb) {
        return this.http.post(this.Web, body).pipe(
            map((response: any) => {
                return true;
            }));
    }


    private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
}
