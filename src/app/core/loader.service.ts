import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class LoaderService {

    public loader = new Subject<boolean>();

    toggleLoader(state: boolean) {
        this.loader.next(state);
    }
}
