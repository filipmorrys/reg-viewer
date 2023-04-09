import { Component, OnInit } from '@angular/core';
import { CIRCULATION } from './circulation';
import { SERVICE } from './service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'reg-viewer';

  data: any[] = [];

  ngOnInit(): void {

    for (let i = 0; i < SERVICE.routeData.tczList.length; i++) {
      let servTcz = SERVICE.routeData.tczList[i];
      let servTrp = SERVICE.routeData.trpList
        .find(trp => trp.trpName === servTcz.tczName);
      let circTcz = CIRCULATION.plannedRoute
        .find(tcz => tcz.tczPublicId == servTcz.tczMnemonic);
      let circTcp = null;
      if (circTcz) {
        circTcp = CIRCULATION.plannedTimetable.tcps
          .find(tcp => tcp.tczOrder === circTcz?.tczOrder);
      }

      this.data.push({
        servTcz: servTcz, servTrp: servTrp,
        circTcz: circTcz, circTcp: circTcp
      });
    }
  }

  toDate(milis: number): string {
    let date = new Date(milis);
    let hours = (date.getHours() < 9) ? '0'+date.getHours() : date.getHours();
    let minutes = (date.getMinutes() < 9) ? '0'+date.getMinutes() : date.getMinutes();
    let seconds = (date.getSeconds() < 9) ? '0'+date.getSeconds() : date.getSeconds();
    
    return hours + ':' + minutes + ':' + seconds;
  }


}
