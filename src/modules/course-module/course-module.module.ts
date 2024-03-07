import { Module } from '@nestjs/common'
import { CourseModuleController } from './course-module.controller'
import { CourseModuleService } from './course-module.service'

@Module({
  providers: [CourseModuleService],
  controllers: [CourseModuleController],
})
export class CourseModuleModule {}
