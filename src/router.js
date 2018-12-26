import Vue from 'vue'
import Router from 'vue-router'

//404 Page
import PageNotFound from '@/components/ErrorPages/PageNotFound';
//Dashboard View
import DashView from './views/Main/Dashboard'
//Dashboard Component Guides
import dashComponents from '@/components/Main/pages/Components';
//Dashboard Pages
import dashHome from '@/components/Main/pages/Home';
//Dashboard Pages
import dashAssets from '@/components/Main/pages/Assets';
//Dashboard Account
import dashAccount from '@/components/Main/pages/Account';
//Dashboard Documents
import dashDocuments from '@/components/Main/pages/Documents';
//Dashboard Documents
import DashDocumentControl from '@/components/Main/pages/DocumentControl';
//Dashboard Templates
import dashTemplates from '@/components/Main/pages/Templates';
//Dashboard Quickfil
import dashQuickFill from '@/components/Main/pages/QuickFill';
//Dashboard Clients
import dashClients from '@/components/Main/pages/Clients';
//Dashboard Help
import dashHelp from '@/components/Main/pages/Help';

//Document Editor View
import DocumentBuilderView from './views/Builders/DocumentBuilder'
//Document Editor Default
import docEditorDefault from '@/components/Builders/Pages/EditDocument';

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component: DashView,
      children: [{
          path: '',
          name: 'Home',
          component: dashHome
        },
        {
          path: 'Assets',
          name: 'Assets',
          component: dashAssets
        },
        {
          path: 'Account',
          name: 'Account',
          component: dashAccount
        },
        {
          path: 'Documents',
          name: 'Documents',
          component: dashDocuments
        },
        {
          path: '/documentControl/:id',
          name: 'documentControl',
          component: DashDocumentControl,
        },  
        {
          path: 'Components',
          name: 'Components',
          component: dashComponents
        }, 
        {
          path: 'Templates',
          name: 'Templates',
          component: dashTemplates
        },
        {
          path: 'Clients',
          name: 'Clients',
          component: dashClients
        },                
        {
          path: 'QuickFill',
          name: 'QuickFill',
          component: dashQuickFill
        },

        {
          path: 'Help',
          name: 'Help',
          component: dashHelp
        },
        ]
    },
    {
      path: '/DocumentEditor/:back/:path/:id',
      component: DocumentBuilderView,
      children: [{
          path: '',
          name: 'EditorHome',
          component: docEditorDefault
        },
    ]
    },
    { path: "*", component: PageNotFound }
  ]
});

export default router;
