import {Injectable} from '@angular/core';

@Injectable()
export class Region {
  constructor(
    public url?: string,
    public tag?: string
  ) {}
}
