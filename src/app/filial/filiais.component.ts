import { Component, OnInit } from '@angular/core';
import { Filial } from './filial';
import { FilialService } from './filial.service';

@Component({
    selector: 'filiais',
    templateUrl: './filiais.component.html',
    styleUrls: ['./filiais.component.css'],
    providers: [FilialService]
})

export class FiliaisComponent implements OnInit {
    title = 'Filiais';
    filiais: Filial[];

    constructor(private filialService: FilialService) {}

    ngOnInit(): void {
      this.getFiliais();
    }

    getFiliais(): void {
      this.filialService.getFiliais().subscribe((filiais: Filial[]) => this.filiais = filiais['results']);
    }
}