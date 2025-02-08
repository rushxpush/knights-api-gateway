import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { map } from 'rxjs';

@Injectable()
export class AppService {
  constructor(
    @Inject('KNIGHTS_BACKEND') private readonly clientKnightsBackend: ClientProxy,
  ) {}

  pingKnightsBackend() {
    const startTs = Date.now();
    const pattern = { cmd: 'ping' };
    const payload = {};
    return this.clientKnightsBackend
      .send<string>(pattern, payload)
      .pipe(
        map((message: string) => ({message, duration: Date.now() - startTs}))
      );

  }

  getHello(): string {
    return 'Hello World!';
  }
}
