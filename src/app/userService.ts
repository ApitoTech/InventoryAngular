import { Injectable } from '@angular/core';

@Injectable()
export class userService {
    private myValue;

    constructor() {}

    setValue(val) {
        this.myValue = val;
    }

    getValue() {
        return this.myValue ;
    }
}