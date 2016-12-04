import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
 
@Injectable()
export class Data {
 
    items: any;
 
    constructor(public http: Http) {
 
        this.items = [
            {
                title: 'Aldi', avatar: 'aldi', checked: false
            },
            {
                title: 'Amart Sports', avatar: 'amart', checked: false
            },
            {
                title: 'Amcal', avatar: 'amcal', checked: false 
            },
            {
                title: 'BigW', avatar: 'bigw', checked: false
            },
            {
                title: 'Coles', avatar: 'coles', checked: false
            },
            {
                title: 'David Jones', avatar: 'david-jones', checked: false
            },
            {
                title: 'IGA', avatar: 'iga', checked: false
            },
            {
                title: 'Myer', avatar: 'myer', checked: false
            }
        ]
 
    }
 
    filterItems(searchTerm){
 
        return this.items.filter((item) => {
            return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
        });     
 
    }

}