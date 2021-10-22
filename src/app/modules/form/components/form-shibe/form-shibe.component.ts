import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataRetriveService } from 'src/app/core/services/data-retrive.service';

@Component({
  selector: 'app-form',
  templateUrl: './form-shibe.component.html',
  styleUrls: ['./form-shibe.component.sass']
})
export class FormShibeComponent implements OnInit {

  public animalForm = new FormGroup ({
    typeAnimal: new FormControl('shibes', Validators.required),
    numberPhoto: new FormControl('1', [Validators.required, Validators.min(1)])
  });

  constructor(private dataRetriveService: DataRetriveService, private router: Router) { }

  ngOnInit(): void {

  }

  submit() {
    this.router.navigate(['/gallery',
                          this.animalForm.controls['typeAnimal'].value,
                          this.animalForm.controls['numberPhoto'].value]);
  }

}
