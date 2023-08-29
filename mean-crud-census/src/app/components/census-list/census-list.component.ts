import { Component, OnInit } from '@angular/core';
import { CrudService } from '../../service/crud.service';

@Component({
  selector: 'app-census-list',
  templateUrl: './census-list.component.html',
  styleUrls: ['./census-list.component.css']
})
export class CensusListComponent implements OnInit {

  Census:any = [];

  constructor(private crudService: CrudService) { }

  ngOnInit(): void {
    this.crudService.GetCensus().subscribe(res => {
      console.log(res)
      this.Census =res;
    });
  }

  onUpdate(id: any): any {
    this.crudService.UpdateCensus(id)
      .subscribe(res => {
        console.log(res)
      })
      location.reload();
  }


  onDelete(id: any): any {
    this.crudService.DeleteCensus(id)
      .subscribe(res => {
        console.log(res)
      })
      location.reload();
  }
}
