import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'actors'
})

export class ActorsPipe implements PipeTransform {
  transform(value: string[]): string {
    return value.join(', ');
  }
}
