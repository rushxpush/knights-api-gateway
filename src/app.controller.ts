import { Body, Controller, Delete, Get, Inject, Param, Patch, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom, Observable } from 'rxjs';

@Controller('/knights')
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject('KNIGHTS_BACKEND') private readonly knightsClient: ClientProxy,
  ) {}

  @Post()
  async createAKnight(@Body() createKnightDto: any) {
    console.log('createKnightDto: ', createKnightDto)
    return firstValueFrom(this.knightsClient.send('create_knight', { createKnightDto: createKnightDto }))
  }

  @Get()
  async getAllKnights(@Query('filter') filter?: string): Promise<Observable<any>> {
    console.log('get knights')
    return firstValueFrom(this.knightsClient.send('get_knights', { filter: filter }));
  }

  @Get(':id')
  async getKnightById(@Param('id') _id: string): Promise<Observable<any>> {
    return firstValueFrom(this.knightsClient.send('get_knight_by_id', { _id: _id }))
  }

  @Patch(':id')
  async updateKnightNickname(@Body() updateKnightDto: any, @Param('id') _id: string) {
    return firstValueFrom(this.knightsClient.send('update_knight_by_id', { payload: { _id, updateKnightDto }}));
  }

  @Delete(':id')
  async removeKnight(@Param('id') _id: string): Promise<Observable<any>> {
    return firstValueFrom(this.knightsClient.send('remove_knight', { _id }));
  }

}
