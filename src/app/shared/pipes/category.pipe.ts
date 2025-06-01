import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category',
  standalone: true,
})
export class CategoryPipe implements PipeTransform {
  transform(value: string): string {
    switch (value) {
      case 'Front-end':
        return 'computer';
      case 'Back-end':
        return 'code';
    }

    return 'build';
  }
}
