import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-update-census',
  templateUrl: './update-census.component.html',
  styleUrls: ['./update-census.component.css']
})
export class UpdateCensusComponent implements OnInit {
  censusForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudService: CrudService
  ) {
  this.censusForm = this.formBuilder.group({
    isbn: [''],
    title: [''],
    author: [''],
    description: [''],
    published_year: [''],
    publisher: ['']
  })
}

ngOnInit(): void { }
onSubmit(): any {
  this.crudService.UpdateCensus(this.censusForm.value)
    .subscribe({
      error: (err) => console.log(err)
      })
  this.ngZone.run(() => this.router.navigateByUrl('/census-list'));
  }
}
