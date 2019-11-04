import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'upper'
})
export class UppercasePipe implements PipeTransform {

	transform(value: string): string {
    if (!value) return value;
		const transformedValue = value.toUpperCase();
		return transformedValue;
	}
}
