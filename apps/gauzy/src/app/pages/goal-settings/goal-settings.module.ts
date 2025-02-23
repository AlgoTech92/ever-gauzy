import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoalSettingsRoutingModule } from './goal-settings-routing.module';
import { GoalSettingsComponent } from './goal-settings.component';
import {
	NbCardModule,
	NbIconModule,
	NbButtonModule,
	NbSelectModule,
	NbDatepickerModule,
	NbInputModule,
	NbDialogModule,
	NbListModule,
	NbTabsetModule,
	NbCheckboxModule,
	NbToggleModule,
	NbFormFieldModule,
	NbSpinnerModule,
	NbTooltipModule
} from '@nebular/theme';
import { EditTimeFrameComponent } from './edit-time-frame/edit-time-frame.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import {
	SmartDataViewLayoutModule,
	CardGridModule,
	EmployeeMultiSelectModule,
	GoalCustomUnitModule,
	GoalTemplatesModule,
	SharedModule
} from '@gauzy/ui-core/shared';
import { EditKpiComponent } from './edit-kpi/edit-kpi.component';

@NgModule({
	declarations: [GoalSettingsComponent, EditTimeFrameComponent, EditKpiComponent],
	imports: [
		CommonModule,
		NbCardModule,
		NbIconModule,
		ReactiveFormsModule,
		NbButtonModule,
		NbSelectModule,
		NbDatepickerModule,
		NbInputModule,
		NbDatepickerModule,
		NbTooltipModule,
		GoalSettingsRoutingModule,
		NbListModule,
		EmployeeMultiSelectModule,
		SharedModule,
		NbTabsetModule,
		CardGridModule,
		NbCheckboxModule,
		NbToggleModule,
		GoalCustomUnitModule,
		GoalTemplatesModule,
		NbFormFieldModule,
		NbSpinnerModule,
		NbDialogModule.forChild(),
		TranslateModule.forChild(),
		SmartDataViewLayoutModule
	]
})
export class GoalSettingsModule {}
