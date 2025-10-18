import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BoardModule } from './board/board.module';
import { CardModule } from './card/card.module';

@Module({
  imports: [BoardModule, CardModule],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
