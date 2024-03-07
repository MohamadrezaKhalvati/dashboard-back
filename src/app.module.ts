import { Module } from '@nestjs/common'
import { AuthModule } from './modules/auth/auth.module'
import { CommentModule } from './modules/comment/comment.module'
import { CourseModuleModule } from './modules/course-module/course-module.module'
import { CourseModule } from './modules/course/course.module'
import { PostModule } from './modules/post/post.module'
import { PresentationModule } from './modules/presentation/presentation.module'
import { PrismaModule } from './modules/prisma/prisma.module'
import { UserModule } from './modules/user/user.module'

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    UserModule,
    PostModule,
    CommentModule,
    PresentationModule,
    CourseModule,
    CourseModuleModule,
  ],
})
export class AppModule {}
