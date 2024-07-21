import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NbIconModule, NbSpinnerModule, NbCardModule, NbSelectModule } from '@nebular/theme';
import { TranslateModule as I18nTranslateModule } from '@ngx-translate/core';
import { SharedModule } from '../../shared.module';
import { ExpensesReportGridComponent } from './expenses-report-grid.component';
import { ProjectColumnViewModule } from '../project-column-view/project-column-view.module';
import { NoDataMessageModule } from '../../no-data-message/no-data-message.module';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		NbCardModule,
		NbIconModule,
		NbSelectModule,
		NbSpinnerModule,
		I18nTranslateModule.forChild(),
		SharedModule,
		ProjectColumnViewModule,
		NoDataMessageModule
	],
	declarations: [ExpensesReportGridComponent],
	exports: [ExpensesReportGridComponent]
})
export class ExpensesReportGridModule {}
