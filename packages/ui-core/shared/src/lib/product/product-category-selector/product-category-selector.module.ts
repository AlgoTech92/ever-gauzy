import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { TranslateModule as I18nTranslateModule } from '@ngx-translate/core';
import { ProductCategorySelectorComponent } from './product-category-selector.component';

@NgModule({
	declarations: [ProductCategorySelectorComponent],
	exports: [ProductCategorySelectorComponent],
	imports: [CommonModule, FormsModule, I18nTranslateModule.forChild(), NgSelectModule]
})
export class ProductCategorySelectorModule {}
