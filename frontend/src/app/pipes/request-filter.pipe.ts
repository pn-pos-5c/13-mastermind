import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'requestFilter'
})
export class RequestFilterPipe implements PipeTransform {

  transform(log: string, blacklist: string): string {
    if (log.includes(blacklist)) {
      return '** not relevant **';
    }
    return log;
  }

}
