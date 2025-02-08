import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { AuthController } from './auth/auth.controller';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from './providers/auth.guard';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { AuthService } from './auth/auth.service';

@Module({
  imports: [
    JwtModule,
    ConfigModule.forRoot({
      isGlobal: true
    }),
    ClientsModule.register([
      {
        name: 'KNIGHTS_BACKEND',
        transport: Transport.TCP,
        options: {
          host: '127.0.0.1',
          port: 3001
        }
      },
      {
        name: 'AUTH_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: 'auth_queue',
          queueOptions: { durable: false }
        }
      }
    ])
  ],
  controllers: [AppController, AuthController],
  providers: [AppService, AuthService, {
    provide: APP_GUARD,
    useClass: AuthGuard
  }],
})
export class AppModule {}
