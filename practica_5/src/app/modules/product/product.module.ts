import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './components/category/category.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './components/product/product.component';
import { ProductImageComponent } from './components/product-image/product-image.component';


@NgModule({
  declarations: [
    CategoryComponent,
    ProductComponent,
    ProductImageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule, 
    RouterModule,
    HttpClientModule
  ],
  exports: [
    CategoryComponent,
    ProductComponent,
    ProductImageComponent
  ]

})
export class ProductModule { }
