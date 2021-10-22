import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { DataRetriveService } from 'src/app/core/services/data-retrive.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.sass']
})
export class GalleryComponent implements OnInit {
  private typeAnimal: string;
  private numberPhoto: string;
  public data$!: Observable<string[]>;

  constructor(private dataRetriveService: DataRetriveService,
              private activatedRoute: ActivatedRoute,
              private location: Location) {
                this.typeAnimal = this.activatedRoute.snapshot.paramMap.get('typeAnimal')!;
                this.numberPhoto = this.activatedRoute.snapshot.paramMap.get('numberPhoto')!
               }

  ngOnInit(): void {
    this.data$ = this.dataRetriveService.getData(this.typeAnimal, this.numberPhoto);
  }

  goBack(): void {
    this.location.back();
  }

}
