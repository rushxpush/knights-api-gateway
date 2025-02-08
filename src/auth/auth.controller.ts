import { Body, Controller, Get, HttpCode, HttpStatus, Inject, Post } from "@nestjs/common";
import { ClientProxy } from "@nestjs/microservices";
import { firstValueFrom } from "rxjs";
import { Public } from "../common/decorators/public.decorator";

@Controller('auth')
export class AuthController {
  constructor(
    @Inject('AUTH_SERVICE') private readonly authServiceToken: ClientProxy
  ) {}

  @Get('ping-auth-service')
  ping() {
    console.log('ping')
    console.log('this.authServiceToken.status: ', this.authServiceToken.status)
    return this.authServiceToken.send({cmd: 'ping'}, {});
  }

  @Public()
  @HttpCode(HttpStatus.OK)
  @Post('login')
  async signIn(@Body() {username, password}: {username: string, password: string}) {
    console.log('1 - api gateway login')
    console.log('this.authServiceToken.status: ', this.authServiceToken.status)
    // if (this.authServiceToken.status)
    return firstValueFrom(this.authServiceToken.send('get_token', {username, password}));
  }
}