import { Inject, Injectable } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { firstValueFrom } from "rxjs";

@Injectable()
export class AuthService {
  constructor(@Inject('AUTH_SERVICE') private readonly authService: ClientProxy) {}

  verifyToken(token: string) {
    return firstValueFrom(this.authService.send('validate_token', { token }));
  }
}