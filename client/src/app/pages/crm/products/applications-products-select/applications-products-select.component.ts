import {ChangeDetectorRef, Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {SnackBarService} from "../../../../services/snack-bar.service";
import {CardProductsComponent} from "../card-products/card-products.component";
import {HttpClientModule} from "@angular/common/http";
import {ApiProductsService} from "../../../../services/api/api-products.service";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {IProducts} from "../../../../typeScript/interfaces";

@Component({
  selector: 'app-applications-products-select',
  standalone: true,
  imports: [
    HttpClientModule,
    CardProductsComponent
  ],
  templateUrl: './applications-products-select.component.html',
  styleUrl: './applications-products-select.component.scss'
})
export class ApplicationsProductsSelectComponent implements OnInit, OnDestroy {
  aSub!: Subscription;
  productsData!: IProducts[];
  constructor(
    private api: ApiProductsService,
    private _snackBar: SnackBarService,
    private cdr: ChangeDetectorRef,
    //Инвормация о клиенте this.data
    @Inject(MAT_DIALOG_DATA) public data?: any,
  ){
  };
  ngOnInit(): void {
    this.loadProductData();
  }

  loadProductData() {
    this.aSub = this.api.getAll('products').subscribe({
      next: ({message, data}) => {
        console.log(data)
        this._snackBar.openBottom(message);
        this.productsData = data
        // Detect changes
        this.cdr.detectChanges();
      },
      error: (error) => {
        this._snackBar.openTop(error.error.message);
      },
    });
  }
  ngOnDestroy(): void {
    // Отписываемся от стрима
    if (this.aSub) {
      this.aSub.unsubscribe();
    }
    // Отключаем обнаружение изменений
    this.cdr.detach();
  }
}
