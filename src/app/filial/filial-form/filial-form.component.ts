import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Filial } from '../filial';
import { FilialService } from '../filial.service';

@Component({
  selector: 'app-filial-form',
  templateUrl: './filial-form.component.html',
  styleUrls: ['./filial-form.component.css']
})
export class FilialFormComponent implements OnInit, OnDestroy {

  title = 'Filial';
  filial: Filial;
  id: string;
  private routeSub: any;

  constructor(private filialService: FilialService, private route: ActivatedRoute) { }

    ngOnInit(): void {
      this.filial = new Filial();
      this.getFilial();
    }

    ngOnDestroy(): void {
      this.routeSub.unsubscribe();
    }    

    getFilial(): void {
      this.routeSub = this.route.params.subscribe(params => {
        this.id = params['id'];
      });
      this.filialService.getFilial(this.id).subscribe((filial: Filial) => {
        this.filial = filial
      });
    }

    onSubmit(): void {
      this.filialService.save(this.filial, this.id);
    }    
}
