import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'convertToSpaces' //This is the name we use when we refence this in the HTML
})
export class ConvertToSpacesPipe implements PipeTransform{
    
    transform(value: string, character: string) {
        return value.replace(character, ' ');
    }

}