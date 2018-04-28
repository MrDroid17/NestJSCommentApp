import { Get, Controller } from '@nestjs/common';

@Controller("greeting")
export class AppController {

 /* * 
  * a method which return a string 
  * @Get()
  * groot(): string {
  * return 'Hello Mr Kumar!';
  *} 
  */

  @Get()
  root():object {
    var json_1 = {
      name : 'Kumar',
      profession : 'Android App Developer'
    };
    return json_1;
  }

}
