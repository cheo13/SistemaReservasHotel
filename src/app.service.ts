import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getAll(): string {
    return 'Hello World!';
  }

  
}

// @Injectable()
// class AppService {
//   log(message: string) {
//     console.log(`LOG: ${message}`);
//   }
// }


// @Injectable()
// class OtherService {
//   constructor(private readonly appService: AppService) {}

//   sendMessage() {
//     this.appService.log('My second service...');
//   }
// }