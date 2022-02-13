const fs = require('fs');


class Journal {

    constructor() {
        this.entries= {};
    }


    addEntry(text) {
        //generate entry with entry number
        let c = ++Journal.counter;
        let entry = `${c} : ${text}`;
        //add entry property
        this.entries[c] = entry; 
        return c; 
    }


    removeEntry(index) {
        delete this.entries[index];
    }


    toString() {
        return Object.values(this.entries).join('\n');
    }

}

Journal.counter = 0;

const j = new Journal();

j.addEntry("I am tired");
j.addEntry('I am littlebit hungry');

console.log(j.toString());