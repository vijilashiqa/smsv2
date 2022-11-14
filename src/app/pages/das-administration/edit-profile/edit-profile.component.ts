import { NbSortDirection, NbSortRequest, NbTreeGridDataSource, NbTreeGridDataSourceBuilder } from '@nebular/theme';
import { TreeViewComponent } from '@syncfusion/ej2-angular-navigations';
import { TreeNode } from 'angular-tree-component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ToasterService, Toast, BodyOutputType } from 'angular2-toaster';
import 'style-loader!angular2-toaster/toaster.css';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ITreeOptions } from 'angular-tree-component';
import { toJS } from "mobx";
import {  RoleusersevicesService } from '../../_services/roleusersevices.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'ngx-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.scss']
})
export class EditProfileComponent implements OnInit {
  @ViewChild('tree') public tree;
  EditProfileForm; edit;id;editrolel;
  submit: boolean;
  nodes = [
    {
      name: 'Dashboard',
      children: [
        { id: 91, name: 'Balance' },
        { id: 92, name: 'STB' },
        { id: 93, name: 'ExpiryDetails' },
        { id: 94, name: 'ScheduleList' },
        { id: 95, name: 'Summary' },
        { id: 96, name: 'Search' },
        { id: 97, name: 'STB/VC Details' }


      ]
    },
    {
      name: 'DAS Operations',
      children: [
        { id: 101, name: 'Global FingerPrint' },
        { id: 102, name: 'Global STB Message' },
        { id: 103, name: 'Kill OSD' }
      ]
    },
    {
      name: 'DAS Administration',
      children: [
        {
          name: 'Admin User',
          children: [
            { id: 2011, name: 'List User' },
            { id: 2012, name: 'Create User' },
            { id: 2013, name: 'Edit User' },
          ]
        },
        {

          name: 'Profile',
          children: [
            { id: 2021, name: 'List Profile' },
            { id: 2022, name: 'Create Profile' },
            { id: 2023, name: 'Edit Profile' },

          ]
        },
        {
          name: 'Operator Setting',
          children: [
            { id: 2031, name: 'List Operator Setting' },  
            { id: 2032, name: 'Create Operator Setting' },
            { id: 2033, name: 'Edit Operator Setting' },

          ]
        },
        {
          name: 'CAS Management',
          children: [
            { id: 2041, name: 'List CAS' },
            { id: 2042, name: 'Add CAS' },
            { id: 2043, name: 'Edit CAS' },
            { id: 2044, name: 'List CAS Mapping' },
            { id: 2045, name: 'Add CAS Mapping ' },
            { id: 2045, name: 'Edit CAS Mapping ' },
          ]
        },
        {
          name: 'Headend',
          children: [
            { id: 2051, name: 'List Headend' },
            { id: 2052, name: 'Create Headend ' },
            { id: 2053, name: 'Edit Headend ' },
            { id: 2054, name: 'View Headend ' },
          ]
        },
        {
          name: 'Geo Panel',
          children: [
            {
              name: 'Location',
              children: [
                { id: 20011, name: 'List Location' },
                { id: 20012, name: 'Create Location ' },
                { id: 20013, name: 'Edit Location ' },
              ]
            },
            {
              name: 'Branch',
              children: [
                { id: 20021, name: 'List Branch' },
                { id: 20022, name: 'Create Branch ' },
                { id: 20023, name: 'Edit Branch ' },
              ]
            },
            {
              name: 'Country',
              children: [
                { id: 20031, name: 'List Country' },
                { id: 20032, name: 'Create Country ' },
                { id: 20033, name: 'Edit Country ' },
              ]
            },
            {
              name: 'State',
              children: [
                { id: 20041, name: 'List State' },
                { id: 20042, name: 'Create State ' },
                { id: 20043, name: 'Edit State ' },
              ]
            },
            {
              name: 'District',
              children: [
                { id: 20051, name: 'List State' },
                { id: 20052, name: 'Create State ' },
                { id: 20053, name: 'Edit State ' },
              ]
            },
            {
              name: 'City',
              children: [
                { id: 20061, name: 'List City' },
                { id: 20062, name: 'Create City ' },
                { id: 20063, name: 'Edit City ' },
              ]
            },

            {
              name: 'Area',
              children: [
                { id: 20071, name: 'List Area' },
                { id: 20072, name: 'Create Area ' },
                { id: 20073, name: 'Edit Area ' },
              ]
            },
            {
              name: 'Pincode',
              children: [
                { id: 20081, name: 'List Pincode' },
                { id: 20082, name: 'Create Pincode ' },
                { id: 20083, name: 'Edit Pincode ' },
              ]
            },
          ]
        },
        { id: 2071, name: 'Revenue Share Details' },
        {
          name: 'Manage SMS Credits',
          children: [
            { id: 2081, name: 'List SMS Credits' },
            { id: 2082, name: 'Add SMS Credits' },
            { id: 2083, name: 'List SMS Gateway' },
            { id: 2084, name: 'Add SMS Gateway' },
          ]
        },
      ]
    },
    {
      name: 'Operator',
      children: [
        { id: 301, name: 'List Operator' },
        { id: 302, name: 'Add Operator' },
        { id: 303, name: 'Edit Operator' },
      ]
    },
    {
      name: 'Subscriber',
      children: [
        { id: 401, name: 'List Subscriber' },
        { id: 402, name: 'Add Subscriber' },
        { id: 403, name: 'Edit Subscriber' },
        { id: 406, name: " Surrendered STB Subscriber's Lis" },
        { id: 407, name: 'Service Extension List ' },
        {
          id: 404, name: 'View Subscriber',
          children: [
            { id: 4041, name: 'Renewal' },
            { id: 4042, name: 'Customer Info' },
            { id: 4043, name: 'Fingerprint' },
            { id: 4044, name: 'STB Message' },
            { id: 4045, name: 'Invoice' },
            { id: 4046, name: 'Replace STB ' },
            { id: 4047, name: 'Blacklist STB ' },
            { id: 4048, name: 'change Password ' },
            { id: 4049, name: 'Service Extension ' },
            { id: 4053, name: 'cancelinvoice ' },




          ],
        },
        { id: 4050, name: 'STB Status ' },
        { id: 405, name: 'Transfer Subscriber' }
      ]
    },
    {
      name: 'Channel Operations',
      children: [
        {
          name: 'Channel Managment',
          children: [
            {
              name: 'Channel Language',
              children: [
                { id: 50011, name: 'List Channel Language' },
                { id: 5012, name: 'Add Channel Language' },
                { id: 5013, name: 'Edit Channel Language' },
              ]
            },
            {
              name: 'Channel Genre',
              children: [
                { id: 50021, name: 'List Channel Channel Genre' },
                { id: 50022, name: 'Add Channel Channel Genre' },
                { id: 50023, name: 'Edit Channel Channel Genre' },
              ]
            },
            {
              name: ' Channel',
              children: [
                { id: 50031, name: 'List Channel' },
                { id: 50032, name: 'Add Channel' },
                { id: 50033, name: 'Edit Channel' },
                { id: 50034, name: 'List Channel Service' },
                { id: 50035, name: 'Create Channel Service' },
                { id: 50036, name: 'Edit Channel Service' },

              ]
            },
          ]
        },

        {
          name: 'Broadcaster',
          children: [
            { id: 5021, name: 'List Broadcaster' },
            { id: 5022, name: 'Add Broadcaster' },
            { id: 5023, name: 'Edit Broadcaster' },
          ]
        },
        {
          name: 'Package Managment',
          children: [
            { id: 5031, name: 'List Pacage' },
            { id: 5032, name: 'Add Package' },
            { id: 5033, name: 'Edit Package' },
            { id: 5034, name: 'Package Share' },
            { id: 5035, name: 'PackageShare List' },
            { id: 5036, name: 'Discount List' },
            { id: 5037, name: 'Discount Add' },
            { id: 5038, name: 'Discount Edit' },
            { id: 5039, name: 'List Package Product' },
            { id: 5040, name: 'Add Pack Product' },


          ]
        },
      ]
    },
    {

      name: 'Inventory',
      children: [
        {
          name: 'Make',
          children: [
            { id: 6011, name: 'List Make' },
            { id: 6012, name: 'Add Make' },
            { id: 6013, name: 'Edit Make' },
          ]
        },
        {
          name: 'STB Types',
          children: [
            { id: 6021, name: 'List STB Type' },
            { id: 6022, name: 'Add STB Type' },
            { id: 6023, name: 'Edit STB Type' },
          ]
        },
        {
          name: 'Model',
          children: [
            { id: 6031, name: 'List Model' },
            { id: 6032, name: 'Add Model' },
            { id: 6033, name: 'Edit Model' },
          ]
        },
        {
          name: 'Business',
          children: [
            { id: 6041, name: 'List Business' },
            { id: 6042, name: 'Add Business' },
            { id: 6043, name: 'Edit Business' },
            { id: 6044, name: 'List Business Details' },
            { id: 6045, name: 'Add Business Details' },
            { id: 6046, name: 'Edit Business Details' },
          ]
        },
        {
          name: 'HSN/SAC',
          children: [
            { id: 6051, name: 'List HSN/SAC' },
            { id: 6052, name: 'Add HSN/SAC' },
            { id: 6053, name: 'Edit HSN/SAC' },
          ]
        },
        {
          name: 'Stock Inward',
          children: [
            { id: 6061, name: 'List Stock Inward' },
            { id: 6062, name: 'Add Stock Inward' },
          ]
        },
        { id: 608, name: 'List Fault STB' }
      ]
    },
    {
      name: 'STB Management',
      children: [
        { id: 701, name: 'List STB' },
        { id: 702, name: 'Upload STB ' },
        { id: 703, name: 'Edit STB ' },
        { id: 704, name: 'List Card' },
        { id: 705, name: 'Upload Card' },
        { id: 706, name: 'Edit Card' },
        { id: 707, name: 'STB Customer Mapping' },
        { id: 712, name: 'Bulk VC Activation' },
        { id: 708, name: 'Bulk Paring' },
        { id: 709, name: 'Bulk Activation/Deactivation' },
        { id: 710, name: 'Bulk Service Extension' },
        { id: 711, name: 'List Fault STB' },
        { id: 714, name: 'Pair/Unpair' },
        { id: 715, name: 'STB Active/Deactive Logs ' },
        { id: 716, name: 'STB Terminal Upload ' },


      ]
    },
    {
      name: 'AIO',
      children: [
        { id: 1111, name: 'Bulk Renewal' },
        { id: 1112, name: 'Bulk Deactivate' },
        { id: 1113, name: 'Bulk Deactivate' },
        { id: 1028, name: 'Monitor Deactive Logs' },

      ]
    },
    {
      name: 'Accounts',
      children: [
        { id: 801, name: 'List Deposit' },
        { id: 802, name: 'Add Deposit' },
        { id: 803, name: 'Edit Deposit' },
        { id: 804, name: 'List Invoice' },
        { id: 809, name: 'Pivot List' },
        { id: 805, name: 'List Wallet Share' },
        { id: 806, name: 'Wallet Share' },
        { id: 807, name: 'Cancel Share' },
        { id: 808, name: 'Update Share' },

      ]
    },
    {
      name: 'Accounts Report',
      children: [
        { id: 901, name: 'Renewal Report' },
        { id: 902, name: 'Deposit Report' },
        { id: 903, name: 'Online Deposit Reports ' },
      ]
    },
    {
      name: 'DAS Report',
      children: [
        { id: 1011, name: 'STB Info' },
        { id: 1012, name: 'STB Transfer Logs ' },
        { id: 1013, name: 'STB Modify Logs ' },
        { id: 1026, name: 'VC Modify Logs ' },
        { id: 1027, name: 'VC Transfer Logs ' },
        { id: 1014, name: 'Blacklist STB Logs ' },
        { id: 1015, name: 'Temporary Suspended Logs ' },
        { id: 1016, name: 'STB Count Report ' },
        { id: 1017, name: 'Creation & Modification Logs ' },
        { id: 1018, name: 'Package Composition Logs ' },
        { id: 1019, name: 'Package Aging Report ' },
        { id: 1020, name: 'Aging Of Service ' },
        { id: 1021, name: 'Activity Logs ' },
        { id: 1022, name: 'Subscriber Info ' },
        { id: 1023, name: 'TRAI Reports ' },
        { id: 1024, name: 'STB AOD Package Report ' },
        { id: 1025, name: 'BC Weekly Report ' },
        { id: 1029, name: 'STB Swap Logs ' }

      ]
    }

  ];
  options: ITreeOptions = {
    useCheckbox: true
  };
  menurole: any;
 
0
  constructor(
    private toast: ToastrService,
    private router: Router,
    private aRoute: ActivatedRoute,
    private role :RoleusersevicesService,
  ) {
    this.edit = JSON.parse(localStorage.getItem('profile_e'));
    
  }
  ngOnInit() {
  //  this.id = this.aRoute.snapshot.queryParams.id;
   //console.log("id********",this.id)
    this.createForm();
    if (this.edit)
    console.log('edit**********',this.edit)
      this.editRole();
  }

async  editRole() {
  
 this.editrolel = await this.role.getRole({id : this.edit['id'] })
 console.log("get edit role..........",this.editrolel)
 this.selectnodes(this.editrolel[0]['menurole']) ;
//  console.log("nodessss////////",nodess)
// }

  }

async  AddProfile() {
    if (this.EditProfileForm.invalid) {
      this.submit = true;
      return;
    }
    var  val = this.EditProfileForm.value,issue = false; 
    val['menurole'].forEach(item => {
      if ((item + '').includes('404')) {
        issue = true
      }
    });
    issue ? val['menurole'].push(404) : '';
    if (val['menurole'].length == 0) {
      this.toast.warning('Pls Select Profile Role')
      return;
    }
    // method = this.edit ? 'editProfile' : 'addProfile'

    if (this.edit) {
      val['id'] = this.edit['id'];
    }

    // this.admin[method](val).subscribe(result => {
    //   this.toastalert(result['msg'], result['status']);
    //   if (result['status'] == 1) {
    //     this.router.navigate(['/pages/Administration/profilelist'])
    //   }
    // });

  }
  selectednodes() {
    const selectedNodes = [];
    Object.entries(toJS(this.tree.treeModel.selectedLeafNodeIds)).forEach(([key, value]) => {
      if (value === true) {
        selectedNodes.push(parseInt(key));
      }
    });
    return (selectedNodes);
  }
  selectnodes(item) {
    console.log('itemselectnod****************',item)
    let data = JSON.parse(item);
    let index: number = data.indexOf(404);
    if (index !== -1) {
      data.splice(index, 1);
    }
    for (var i = 0; i < data.length; ++i) {
      let leaf = this.tree.treeModel.getNodeById(JSON.parse(data[i]))
      if (leaf)
        leaf.setIsSelected(true);
    }
  }

  createForm() {
    this.EditProfileForm = new FormGroup({
      rolename: new FormControl(this.edit ? this.edit['rolename'] : '', Validators.required),
      descr: new FormControl(this.edit ? this.edit['desc'] : '')
    });
  }

}