import { Injectable } from '@nestjs/common';
import { GoalGeneralSetting } from './goal-general-setting.entity';
import { TenantAwareCrudService } from './../core/crud';
import { MikroOrmGoalGeneralSettingRepository } from './repository/mikro-orm-goal-general-setting.repository';
import { TypeOrmGoalGeneralSettingRepository } from './repository/type-orm-goal-general-setting.repository';

@Injectable()
export class GoalGeneralSettingService extends TenantAwareCrudService<GoalGeneralSetting> {
	constructor(
		typeOrmGoalGeneralSettingRepository: TypeOrmGoalGeneralSettingRepository,
		mikroOrmGoalGeneralSettingRepository: MikroOrmGoalGeneralSettingRepository
	) {
		super(typeOrmGoalGeneralSettingRepository, mikroOrmGoalGeneralSettingRepository);
	}
}
