import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getAll();
  }
}



// @Post()
//   @HttpCode(204)
//   createProduct(
//     @Body('name') name: string,
//     @Body('description') description: string
//   ) {
//     this.appService.insert ({
//       id: this.appService.getAll().length,
//       name,
//       description
//     });
//   }


  
  
// @Controller('ejemplo')
// class AppController {
//   constructor(private readonly appService: AppService) {}

//   @Get()
//   getEjemplo() {
//     this.appService.log('Obteniendo ejemplo...');
//     return '¡Hola desde el controlador!';
//   }
// }
