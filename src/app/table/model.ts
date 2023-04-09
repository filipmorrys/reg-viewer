export class HeaderEntry {

    index: number;

    label: string;

    constructor(index: number, label: string) {
        this.index = index;
        this.label = label;
    }

}

export class DataEntry {
    index: number;

    value: string;

    constructor(index: number, value: string) {
        this.index = index;
        this.value = value;
    }
    
}


export class TableData {

    headers: HeaderEntry[];

    data: DataEntry[][];


    constructor(headers: HeaderEntry[], data: DataEntry[][]) {
        this.headers = headers;
        this.data = data;
    }
}