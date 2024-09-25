import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Healthcheck')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @ApiOperation({
    summary: 'Healthcheck',
    description: 'This endpoints checks service is running correctly',
  })
  @Get()
  healthcheck(): string {
    return this.appService.getHello();
  }
}
