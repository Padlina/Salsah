import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userProjects'
})
export class UserProjectsPipe implements PipeTransform {

  transform(allProjects: Object[]): any {
      return allProjects.filter(project => project['active']);
  }

}
