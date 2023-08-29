import { Component, OnInit, NgZone } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/service/crud.service';

@Component({
  selector: 'app-add-census',
  templateUrl: './add-census.component.html',
  styleUrls: ['./add-census.component.css']
})
export class AddCensusComponent implements OnInit {
  censusForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private crudService: CrudService
  ) {
  this.censusForm = this.formBuilder.group({
    year_of_the_census: [''],
    census_takers_name: [''],
    number_of_people_in_household: [''],
    household_state: [''],
    household_city: [''],
  })
}

ngOnInit(): void { }
onSubmit(): any {
  this.crudService.AddCensus(this.censusForm.value)
    .subscribe({
      error: (err) => console.log(err)
      })
  this.ngZone.run(() => this.router.navigateByUrl('/census-list'));
  }
}
