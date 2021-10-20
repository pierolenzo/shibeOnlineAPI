import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataRetriveService } from 'src/app/core/services/data-retrive.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.sass']
})
export class FormComponent implements OnInit {
  public data$!: Observable<string[]>;

  constructor(private dataRetriveService: DataRetriveService) { }

  ngOnInit(): void {

    this.data$ = this.dataRetriveService.getData()

  }

}
