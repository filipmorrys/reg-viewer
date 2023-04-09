export class HeaderEntry {

    index: number;

    label: string;

    constructor(index: number, label: string) {
        this.index = index;
        this.label = label;
    }


}

export class CellEntry {
    index: number;

    value: string;

    constructor(index: number, value: string) {
        this.index = index;
        this.value = value;
    }

}


export class TableData {

    headers: HeaderEntry[] = [];

    cells: CellEntry[][] = [];


    constructor(h: string[], c: string[][]) {
        for (let i = 0; i < h.length; i++) {
            this.headers.push(new HeaderEntry(i, h[i]));
        }

        for (let i = 0; i < c.length; i++) {
            let r = c[i];
            let row = [];
            for (let j = 0; j < r.length; j++) {
                row.push(new CellEntry(j, r[j]));
            }

            this.cells.push(row);
        }
    }

}