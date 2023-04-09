import { Component, OnInit } from '@angular/core';
import { CIRCULATION } from './circulation';
import { SERVICE } from './service';
import { CellEntry, HeaderEntry, TableData } from './table/model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'reg-viewer';

  rawData: any[] = [];

  tableData!: TableData;

  ngOnInit(): void {

    this.getServiceAndCirculationData();

    this.loadTableData();
  }

  private getServiceAndCirculationData() {
    for (let i = 0; i < SERVICE.routeData.tczList.length; i++) {
      let servTcz = SERVICE.routeData.tczList[i];
      let servTrp = SERVICE.routeData.trpList
        .find(trp => trp.trpName === servTcz.tczName);
      let circTcz = CIRCULATION.plannedRoute
        .find(tcz => tcz.tczPublicId === servTcz.tczMnemonic);
      let circTcp = null;
      if (circTcz) {
        circTcp = CIRCULATION.plannedTimetable.tcps
          .find(tcp => tcp.tczOrder === circTcz?.tczOrder);
      }

      this.rawData.push({
        servTcz: servTcz, servTrp: servTrp,
        circTcz: circTcz, circTcp: circTcp
      });
    }
  }

  private loadTableData() {
    let headers = [
      "S. No",
      "S. TCZ",
      "S. TCZ Type",
      "S. St Track",
      "S. Circ Track",
      "S. Distance",
      "S. TRP Type",
      "S. Arrival Hour",
      "S. Commercial Hour",
      "S. Technical Hour",
      "S. Departure Hour",
      "C. Node",
      "C. TCZ",
      "C. TCZ Order",
      "C. St Track",
      "C. Circ Track",
      "C. Distance",
      "C. TCZ Type",
      "C. Arrival Hour",
      "C. Commercial Hour",
      "C. Technical Hour",
      "C. Departure Hour"
    ];

    let data = [];
    for (let rawRow of this.rawData) {
      let row = [
        rawRow.servTcz.nodeMnemonic,
        rawRow.servTcz.tczName,
        rawRow.servTcz.tczType,
        rawRow.servTcz.mnemonicStationingTrack,
        rawRow.servTcz.mnemonicCirculationTrack,
        rawRow.servTcz.distance,
        (rawRow.servTrp) ? rawRow.servTrp.trpType : '',
        (rawRow.servTrp) ? this.toDate(rawRow.servTrp.arrival) : '',
        (rawRow.servTrp) ? this.toDate(rawRow.servTrp.commercialDeparture) : '',
        (rawRow.servTrp) ? this.toDate(rawRow.servTrp.technicalDeparture) : '',
        (rawRow.servTrp) ? this.toDate(rawRow.servTrp.departureTime) : '',
        (rawRow.circTcz) ? rawRow.circTcz.nodeId : '',
        (rawRow.circTcz) ? rawRow.circTcz.tczPublicId : '',
        (rawRow.circTcz) ? rawRow.circTcz.tczOrder : '',
        (rawRow.circTcz) ? rawRow.circTcz.stTrackPubId : '',
        (rawRow.circTcz) ? rawRow.circTcz.circTrackPubId : '',
        (rawRow.circTcz) ? rawRow.circTcz.distance : '',
        (rawRow.circTcp) ? rawRow.circTcp.type : '',
        (rawRow.circTcp) ? this.toDate(rawRow.circTcp.arrival.hour) : '',
        (rawRow.circTcp) ? this.toDate(rawRow.circTcp.departure.commercial) : '',
        (rawRow.circTcp) ? this.toDate(rawRow.circTcp.departure.technical) : '',
        (rawRow.circTcp) ? this.toDate(rawRow.circTcp.departure.hour) : ''
      ];

      data.push(row);
    }

    this.tableData = new TableData(headers, data);
    console.log("tableData", this.tableData);

  }

  toDate(milis: number): string {
    let date = new Date(milis);
    let hours = (date.getHours() < 9) ? '0' + date.getHours() : date.getHours();
    let minutes = (date.getMinutes() < 9) ? '0' + date.getMinutes() : date.getMinutes();
    let seconds = (date.getSeconds() < 9) ? '0' + date.getSeconds() : date.getSeconds();

    return hours + ':' + minutes + ':' + seconds;
  }


}
