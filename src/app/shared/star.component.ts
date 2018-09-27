import { Component, OnChanges, Input, Output, EventEmitter } from "@angular/core";


@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css'] 
})
export class StarComponent implements OnChanges{
    @Input() rating: number; //input property that can be set outside the component.
    starWidth: number;
    //with OutPut directive we can pass information to the parent component (container)
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    ngOnChanges(): void {
        this.starWidth = this.rating * 75 / 5;
    }

    onClick() : void {
        this.ratingClicked.emit(`The rating ${this.rating} was clicked`);
    }
}