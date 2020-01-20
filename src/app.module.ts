import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PromModule } from '@digikare/nestjs-prom';

@Module({
  imports: [
    PromModule.forRoot({
      defaultLabels: {
        app: 'nest_app',
      }
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
