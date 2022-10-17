import { Component, OnInit } from '@angular/core';
import { ChannelService } from '../../_services/channel.service';
import { PagerService } from '../../_services/pager.service';

@Component({
  selector: 'ngx-listchannelsrv',
  templateUrl: './listchannelsrv.component.html',
  styleUrls: ['./listchannelsrv.component.scss']
})
export class ListchannelsrvComponent implements OnInit {
 
  pager: any = {}; page: number = 1; pagedItems: any = []; limit = 25;listgenre;data;count;
  constructor( private channel:ChannelService,
    private pageservice :PagerService) { }

  async ngOnInit() {
    await this.initiallist(

    );
      }
    
      async initiallist() {
        this.listgenre = await this.channel.listchannelservices({index:(this.page - 1) * this.limit,limit:this.limit});
        console.log('list channel services', this.listgenre)
        this.data = this.listgenre[0];
        this.count = this.listgenre[1].count;
        this.setPage();
    
      }
      getlist(page) {
        var total = Math.ceil(this.count / this.limit);
        let result = this.pageservice.pageValidator(this.page, page, total);
        this.page = result['value'];
        if (result['result']) {
          this.initiallist();
        };
      }
    
      setPage() {
        this.pager = this.pageservice.getPager(this.count, this.page, this.limit);
        this.pagedItems = this.data;
      }
      Edit(item)
{

  
}    }