import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'E-commerce',
    icon: 'shopping-cart-outline',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'IoT Dashboard',
    icon: 'home-outline',
    link: '/pages/iot-dashboard',
  },
  {
    title: 'DAS Operations',
    icon: 'home-outline',
    children: [
      {
        title: 'Global FingurePrint',
        link: '/pages/dasoperation/globlefingureprint',
      },
      {
        title: 'Global STB Messages',
        link: '/pages/dasoperation/globle-stbmessages',
      },
      {
        title: 'Kill OSD',
        link: '/pages/dasoperation/kill-osd',
      }

    ],

  },
  {
    title: 'DAS Admin',
    icon: 'home-outline',
    children: [
      {
        title: 'Admin User',
        // link: '/pages/das-administration/das-administration',
        children: [
          {
            title: 'List user',
            link: '/pages/das-administration/list-user',

          },
          {
            title: 'Create user',
            link: '/pages/das-administration/create-user',
          }
        ]
      },

      {
        title: 'Profile',
        // link: '/pages/das-administration/das-administration',
        children: [
          {
            title: 'List Profile',
            link: '/pages/das-administration/list-profile',

          },
          {
            title: 'Create Profile',
            link: '/pages/das-administration/create-profile',

          }


        ]
      },


      {
        title: 'Operator Setting',
        // link: '/pages/das-administration/das-administration',
        children: [
          {
            title: 'Operator Setting List',
            link: '/pages/das-administration/operator-setting-list',

          },
          {
            title: 'Add Operator Setting',
            link: '/pages/das-administration/addoperator-setting',

          }


        ]
      },
      {
        title: 'CAS Management',
        // link: '/pages/das-administration/das-administration',
        children: [
          {
            title: 'CAS',
            link: '/pages/das-administration/caslist',

          },
          {
            title: 'List HD CAS ',
            link: '/pages/das-administration/hdcaslist',

          },
          {
            title: 'Add HD CAS',
            link: '/pages/das-administration/addhdcas',

          }


        ]
      },
      {
        title: 'Headend',
        // link: '/pages/das-administration/das-administration',
        children: [
          {
            title: 'List Headend',
            link: '/pages/das-administration/headendlist',

          },
          {
            title: 'Add Headend',
            link: '/pages/das-administration/headendadd',

          }
          

        ]
      },
      {
        title: 'Geo Panel',
        // link: '/pages/das-administration/das-administration',
        children: [
          {
            title: 'Location',
            link: '/pages/das-administration/geo-listlocation',

          },
          {
            title: 'Branch',
            link: '/pages/das-administration/geo-branchlist',

          },
          {
            title: 'Country',
            link: '/pages/das-administration/geo-countylist',

          },
          {
            title: 'State',
            link: '/pages/das-administration/geo-statelist',

          },
          {
            title: 'District',
            link: '/pages/das-administration/geo-districtlist',

          },
          {
            title: 'City',
            link: '/pages/das-administration/geo-citylist',

          },
          {
            title: 'Pincode',
            link: '/pages/das-administration/geo-pincodelist',

          },
          {
            title: 'Area',
            link: '/pages/das-administration/geo-arealist',

          },
          

        ]
      },
        {
        title: 'Revenue share',
        link: '/pages/das-administration/msorevenueshare',
      },
      {
        title: 'Manage SMS Credits',
        // link: '/pages/das-administration/das-administration',
        children: [
          {
            title: 'List SMS Credits',
            link: '/pages/das-administration/sms-creditslist',

          },
          {
            title: 'Add SMS Credits',
            link: '/pages/das-administration/sms-addcredits',

          },
          {
            title: 'SMS Gateway List',
            link: '/pages/das-administration/sms-gatelist',

          },
          {
            title: 'SMS Gateway',
            link: '/pages/das-administration/sms-gate',

          }
          

        ]
      },

    ],
  },
  {
    title: 'Operator',
    icon: 'edit-2-outline',
    children: [
      {
        title: 'List Operator',
        link: '/pages/users/userlist',
      },
      {
        title: 'Add Operator',
        link: '/pages/users/add-user',
      },
      
    ]
    
  },
  {
    title: 'Subscriber',
    icon: 'edit-2-outline',
    children: [
      {
        title: 'List Subscriber',
        link: '/pages/customer/cust-list',
      },
      {
        title: 'Add Subscriber',
        link: '/pages/customer/add-cust',
      },
      {
        title: 'Transfer Subscriber',
        link: '/pages/customer/cust-transfer',
      },
      {
        title: 'Surrenderd Subscribers',
        link: '/pages/customer/surender-stb',
      },
      
    ]
    
  },
  {
    title: 'Channel',
    icon: 'edit-2-outline',
    children: [
      {
        title: 'Channel Managment',
        // link: '/pages/customer/cust-list',
        children: [
          {
            title: 'List Languge',
            link: '/pages/channelcategory/listlanguage',

          },
          {
            title: 'List Genre',
            link: '/pages/channelcategory/listgenre',

          },
          {
            title: 'List Channel',
            link: '/pages/channelcategory/listchannel',

          },
          {
            title: 'Create Channel',
            link: '/pages/channelcategory/addchannels',

          },
          {
            title: 'List Channel Service',
            link: '/pages/channelcategory/listchannelsrv',

          },
          {
            title: 'Create Channel Service',
            link: '/pages/channelcategory/addchannelsrv',

          },
        ],
        
      },
      {
        title: 'Broadcaster',
        // link: '/pages/customer/cust-list',
        children: [
          {
            title: 'List Broadcaster',
            link: '/pages/channelcategory/broadcaster-list',

          },
          {
            title: 'Add Broadcaster',
            link: '/pages/channelcategory/addbroadcaster',

          },
          
        ],

      },
      {
        title: 'Pacakge Managment',
        // link: '/pages/customer/cust-list',
        children: [
          {
            title: 'List Package',
            link: '/pages/channelcategory/packagelist',

          },
          {
            title: 'Add Package',
            link: '/pages/channelcategory/addpackage',

          },
          {
            title: 'Add Package Share',
            link: '/pages/channelcategory/addpackageshare',

          },
          {
            title: 'List Package Share',
            link: '/pages/channelcategory/packagesharelist',

          },
          {
            title: 'List Package Product',
            link: '/pages/channelcategory/listpackprod',

          },         
        ],
      },
    ],
  },
  {
    title: 'Inventory',
    icon: 'layout-outline',
    children: [
      {
        title: 'Vendor',
        link: '/pages/inventory/vendorlist',
      },
      {
        title: 'STB Types',
        link: '/pages/inventory/stblist',
      },
      {
        title: 'Model',
        link: '/pages/inventory/modellist',
      },
      {
        title: 'Vendor Details',
        // link: '/pages/layout/stepper',
        children: [
          {
            title: 'List Vendor',
            link: '/pages/inventory/Vendordetailslist',

          },
          {
            title: 'Add Vendor Detail',
            link: '/pages/inventory/addvendordetails',
          },
          // {
          //   title: 'List Business Detail',
          //   link: '/pages/inventory/businesslistdetails',
          // },
        ],
      },
      {
        title: 'HSN/SAC',
        link: '/pages/inventory/hsnlist',
      },
      {
        title: 'List Stock Inward',
        link: '/pages/inventory/liststock',
      },
      {
        title: 'Add Stock Inward',
        link: '/pages/inventory/addstock',
      },
      {
        title: 'List Fault STB',
        link: '/pages/inventory/faultstb',
      },

    ],
    },
    {
      title: 'STB Management',
      icon: 'layout-outline',
      children: [
        {
          title: 'List STB',
          link: '/pages/stbmanagement/stblist',
        },
        {
          title: 'Upload STB',
          link: '/pages/stbmanagement/addstb',
        },
        {
          title: 'List Card',
          link: '/pages/stbmanagement/cardlist',
        },
        {
          title: 'Upload Card',
          link: '/pages/stbmanagement/uploadcard',
        },
        {
          title: 'STB Cust Mapping ',
          link: '/pages/stbmanagement/custmapping',
        },
        {
          title: 'Bulk Vc Activation',
          link: '/pages/stbmanagement/bulkvcactive',
        },
        {
          title: 'Bulk Paring',
          link: '/pages/stbmanagement/bulkpairing',
        },
        {
          title: 'STB Terminal Upload',
          link: '/pages/stbmanagement/stbterminal',
        },
        {
          title: 'Bulk Acivation/Deactivation',
          link: '/pages/stbmanagement/bulkactivation',
        },
        {
          title: 'Bulk Service Extention',
          link: '/pages/stbmanagement/bulkserviceactivation',
        },
        {
          title: 'List Fault STB',
          link: '/pages/stbmanagement/faultstb',
        },
       
        {
          title: 'STB Active/Deactive Logs',
          link: '/pages/stbmanagement/stbactdeact',
        },
      ],

    },
    {
    title: 'Accounts',
      icon: 'layout-outline',
      children: [
        {
          title: 'List Deposit',
          link: '/pages/accounts/depositlist',
        },
        {
          title: 'Add Deposit',
          link: '/pages/accounts/adddeposit',
        },
        {
          title: 'List Invoice',
          link: '/pages/accounts/invoicelist',
        },
        {
          title: 'Wallet Share',
          link: '/pages/accounts/walletshare',
        },
        {
          title: 'Wallet List',
          link: '/pages/accounts/walletlist',
        },
        {
          title: 'Deposit Pivot List',
          link: '/pages/accounts/pivotlist',
        },



      ],
    },
  

/*
  {
    title: 'FEATURES',
    group: true,
  },
  {
    title: 'Layout',
    icon: 'layout-outline',
    children: [
      {
        title: 'Stepper',
        link: '/pages/layout/stepper',
      },
      {
        title: 'List',
        link: '/pages/layout/list',
      },
      {
        title: 'Infinite List',
        link: '/pages/layout/infinite-list',
      },
      {
        title: 'Accordion',
        link: '/pages/layout/accordion',
      },
      {
        title: 'Tabs',
        pathMatch: 'prefix',
        link: '/pages/layout/tabs',
      },
    ],
  },
  {
    title: 'Forms',
    icon: 'edit-2-outline',
    children: [
      {
        title: 'Form Inputs',
        link: '/pages/forms/inputs',
      },
      {
        title: 'Form Layouts',
        link: '/pages/forms/layouts',
      },
      {
        title: 'Buttons',
        link: '/pages/forms/buttons',
      },
      {
        title: 'Datepicker',
        link: '/pages/forms/datepicker',
      },
    ],
  },
  {
    title: 'UI Features',
    icon: 'keypad-outline',
    link: '/pages/ui-features',
    children: [
      {
        title: 'Grid',
        link: '/pages/ui-features/grid',
      },
      {
        title: 'Icons',
        link: '/pages/ui-features/icons',
      },
      {
        title: 'Typography',
        link: '/pages/ui-features/typography',
      },
      {
        title: 'Animated Searches',
        link: '/pages/ui-features/search-fields',
      },
    ],
  },
  {
    title: 'Modal & Overlays',
    icon: 'browser-outline',
    children: [
      {
        title: 'Dialog',
        link: '/pages/modal-overlays/dialog',
      },
      {
        title: 'Window',
        link: '/pages/modal-overlays/window',
      },
      {
        title: 'Popover',
        link: '/pages/modal-overlays/popover',
      },
      {
        title: 'Toastr',
        link: '/pages/modal-overlays/toastr',
      },
      {
        title: 'Tooltip',
        link: '/pages/modal-overlays/tooltip',
      },
    ],
  },
  {
    title: 'Extra Components',
    icon: 'message-circle-outline',
    children: [
      {
        title: 'Calendar',
        link: '/pages/extra-components/calendar',
      },
      {
        title: 'Progress Bar',
        link: '/pages/extra-components/progress-bar',
      },
      {
        title: 'Spinner',
        link: '/pages/extra-components/spinner',
      },
      {
        title: 'Alert',
        link: '/pages/extra-components/alert',
      },
      {
        title: 'Calendar Kit',
        link: '/pages/extra-components/calendar-kit',
      },
      {
        title: 'Chat',
        link: '/pages/extra-components/chat',
      },
    ],
  },
  {
    title: 'Maps',
    icon: 'map-outline',
    children: [
      {
        title: 'Google Maps',
        link: '/pages/maps/gmaps',
      },
      {
        title: 'Leaflet Maps',
        link: '/pages/maps/leaflet',
      },
      {
        title: 'Bubble Maps',
        link: '/pages/maps/bubble',
      },
      {
        title: 'Search Maps',
        link: '/pages/maps/searchmap',
      },
    ],
  },
  {
    title: 'Charts',
    icon: 'pie-chart-outline',
    children: [
      {
        title: 'Echarts',
        link: '/pages/charts/echarts',
      },
      {
        title: 'Charts.js',
        link: '/pages/charts/chartjs',

      },
      {
        title: 'D3',
        link: '/pages/charts/d3',
      },
    ],
  },
  {
    title: 'Editors',
    icon: 'text-outline',
    children: [
      {
        title: 'TinyMCE',
        link: '/pages/editors/tinymce',
      },
      {
        title: 'CKEditor',
        link: '/pages/editors/ckeditor',
      },


    ],
  },
  {
    title: 'Tables & Data',
    icon: 'grid-outline',
    children: [
      {
        title: 'Smart Table',
        link: '/pages/tables/smart-table',
      },
      {
        title: 'Tree Grid',
        link: '/pages/tables/tree-grid',
      },
    ],
  },
  {
    title: 'Miscellaneous',
    icon: 'shuffle-2-outline',
    children: [
      {
        title: '404',
        link: '/pages/miscellaneous/404',
      },


    ],


  },


  {
    title: 'login',
    icon: 'shuffle-2-outline',
    children: [

      {
        title: 'login',
        link: '/pages/login/loginc'
      },
    ]
  },
  {
    title: 'Auth',
    icon: 'lock-outline',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
  */
];

