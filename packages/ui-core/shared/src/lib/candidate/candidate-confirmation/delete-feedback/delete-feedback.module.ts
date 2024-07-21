import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbCardModule, NbIconModule, NbButtonModule } from '@nebular/theme';
import { TranslateModule as I18nTranslateModule } from '@ngx-translate/core';
import { DeleteFeedbackComponent } from './delete-feedback.component';

@NgModule({
	imports: [CommonModule, NbButtonModule, NbCardModule, NbIconModule, I18nTranslateModule.forChild()],
	declarations: [DeleteFeedbackComponent],
	exports: [DeleteFeedbackComponent]
})
export class DeleteFeedbackModule {}
