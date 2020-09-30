import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';
import { PostsModule } from './posts/posts.module';
import { UserModule } from './user/user.module';



@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'nest-app-db',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'root',
    entities: [join(__dirname, '**/**.entity{.ts,.js}')],
    synchronize: true,
    keepConnectionAlive: true,
  }), PostsModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
