import { Component, OnDestroy, OnInit } from '@angular/core';
import { NbMediaBreakpointsService, NbMenuService, NbSidebarService, NbThemeService } from '@nebular/theme';

import { UserData } from '../../../@core/data/users';
import { LayoutService } from '../../../@core/utils';
import { map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { ChangepasswordComponent } from '../changepassword/changepassword.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { RoleservicesService } from '../../../pages/_services';

@Component({
  selector: 'ngx-header',
  styleUrls: ['./header.component.scss'],
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit, OnDestroy {

  private destroy$: Subject<void> = new Subject<void>();
  userPictureOnly: boolean = false;

  user: any = { name: this.role.getuserFname() }
  themes = [
    {
      value: 'default',
      name: 'Light',
    },
    {
      value: 'dark',
      name: 'Dark',
    },
    {
      value: 'cosmic',
      name: 'Cosmic',
    },
    {
      value: 'corporate', 
      name: 'Corporate',
    },
  ];

  currentTheme = 'default';

  userMenu = [{ title: 'Change Password', data: { id: 'Change Password' } } ,{ title: 'Log out',link:'auth/logout' } ];
  title: string;

  constructor(private sidebarService: NbSidebarService,
              private menuService: NbMenuService,
              private modal: NgbModal,
              private role: RoleservicesService,
              private themeService: NbThemeService,
              private layoutService: LayoutService,) {
  }

  ngOnInit() { 
      this.menuService.onItemClick().subscribe((event) => {
        if (event.item.title === 'Change Password') {
          const modalRef = this.modal.open(ChangepasswordComponent, {  size: 'sm' ,container: 'nb-layout', backdrop: false });
          modalRef.componentInstance.title = 'Change Password';
         
        }
      });
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

  changeTheme(themeName: string) {
    this.themeService.changeTheme(themeName);
  }

  toggleSidebar(): boolean {
    this.sidebarService.toggle(true, 'menu-sidebar');
    this.layoutService.changeLayoutSize();

    return false;
  }

  navigateHome() {

    this.menuService.navigateHome();
    return false;
  }
}
