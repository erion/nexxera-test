import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Filial } from './filial';

@Injectable()
export class FilialService {

    private url: string = 'filiais';

    constructor(private http: HttpClient) {}

    getFilial(id: string) {
        let url = this.url +'/'+ id;
        return this.http.get(`${url}`);
    }

    getFiliais() {
        return this.http.get(`${this.url}`);
    }

    save(filial: Filial, id: string) {
console.log(id, JSON.stringify(filial));
        let headers = new HttpHeaders();
        headers.append('Content-Type', 'application/json');
        if(id) {
            return this.http.put(`${this.url}`, JSON.stringify(filial), {headers: headers});
        } else {
            filial.id = null;
            filial.ativo = 1;
console.log(filial);
            return this.http.post(`${this.url}`, JSON.stringify(filial), {headers: headers});
        }
    }

}