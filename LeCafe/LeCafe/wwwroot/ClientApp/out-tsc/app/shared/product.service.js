import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { Orden, Item } from './order';
let ProductService = class ProductService {
    constructor(http) {
        this.http = http;
        this.UrlEntradas = '/api/producto/1';
        this.UrlCafe = '/api/producto/2';
        this.urlJugos = "/api/producto/3";
        this.urlVinos = "/api/producto/4";
        this.urlLicores = "/api/producto/5";
        this.urlDesayunos = "/api/producto/6";
        this.urlPancakes = "/api/producto/7";
        this.urlSandwiches = "/api/producto/8";
        this.urlPastas = "/api/producto/9";
        this.urlHamburguesas = "/api/producto/10";
        this.urlEnsaladas = "/api/producto/11";
        this.order = new Orden();
        this.token = "";
        this.tokenExpiration = new Date();
        this.ruta = "";
    }
    getEntradas() {
        return this.http.get(this.UrlEntradas)
            .pipe(tap(data => console.log('All: ' + JSON.stringify(data))), catchError(this.handleError));
    }
    getCafes() {
        return this.http.get(this.UrlCafe)
            .pipe(tap(data => console.log('All: ' + JSON.stringify(data))), catchError(this.handleError));
    }
    getJugos() {
        return this.http.get(this.urlJugos)
            .pipe(tap(data => console.log('All: ' + JSON.stringify(data))), catchError(this.handleError));
    }
    getVinos() {
        return this.http.get(this.urlVinos)
            .pipe(tap(data => console.log('All: ' + JSON.stringify(data))), catchError(this.handleError));
    }
    getLicores() {
        return this.http.get(this.urlLicores)
            .pipe(tap(data => console.log('All: ' + JSON.stringify(data))), catchError(this.handleError));
    }
    getDesayunos() {
        return this.http.get(this.urlDesayunos)
            .pipe(tap(data => console.log('All: ' + JSON.stringify(data))), catchError(this.handleError));
    }
    getPancakes() {
        return this.http.get(this.urlPancakes)
            .pipe(tap(data => console.log('All: ' + JSON.stringify(data))), catchError(this.handleError));
    }
    getSandwiches() {
        return this.http.get(this.urlSandwiches)
            .pipe(tap(data => console.log('All: ' + JSON.stringify(data))), catchError(this.handleError));
    }
    getPastas() {
        return this.http.get(this.urlPastas)
            .pipe(tap(data => console.log('All: ' + JSON.stringify(data))), catchError(this.handleError));
    }
    getHamburguesas() {
        return this.http.get(this.urlHamburguesas)
            .pipe(tap(data => console.log('All: ' + JSON.stringify(data))), catchError(this.handleError));
    }
    getEnsaldas() {
        return this.http.get(this.urlEnsaladas)
            .pipe(tap(data => console.log('All: ' + JSON.stringify(data))), catchError(this.handleError));
    }
    getTarjeta(id) {
        return this.http.get("/api/tarjeta/" + id)
            .pipe(tap(data => console.log('All: ' + JSON.stringify(data))), catchError(this.handleError));
    }
    añadirAOrden(product) {
        let item = this.order.items.find(i => i.producto.id == product.id);
        if (item) {
            item.cantidad++;
        }
        else {
            item = new Item();
            item.producto = product;
            item.cantidad = 1;
            this.order.items.push(item);
        }
    }
    get loginRequired() {
        return this.token.length == 0 || this.tokenExpiration > new Date();
    }
    login(creds) {
        return this.http.post("/cuenta/CreateToken", creds)
            .pipe(map((response) => {
            let tokenInfo = response;
            this.token = tokenInfo.token;
            this.tokenExpiration = tokenInfo.expiration;
            return true;
        }));
    }
    crearOrden() {
        var fecha = new Date();
        if (!this.order.numeroOrden) {
            this.order.numeroOrden = Math.round(Math.random()).toString() + fecha.getTime().toString();
        }
        return this.http.post("/api/order", this.order, {
            headers: new HttpHeaders({ "Authorization": "Bearer " + this.token })
        })
            .pipe(map((response) => {
            let headerInfo = response;
            this.ruta = response.ruta;
            console.log(headerInfo);
            return true;
        }));
    }
    handleError(err) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            errorMessage = `An error occurred: ${err.error.message}`;
        }
        else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
    }
};
ProductService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ProductService);
export { ProductService };
//# sourceMappingURL=product.service.js.map