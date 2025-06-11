import { createRouter, createWebHashHistory } from 'vue-router'

import PageNotFound from '@/components/ErrorPages/PageNotFound'
import DashView from './views/Main/Dashboard'
import dashComponents from '@/components/Main/pages/Components'
import dashHome from '@/components/Main/pages/Home'
import dashAssets from '@/components/Main/pages/Assets'
import dashAccount from '@/components/Main/pages/Account'
import dashDocuments from '@/components/Main/pages/Documents'
import DashDocumentControl from '@/components/Main/pages/DocumentControl'
import dashTemplates from '@/components/Main/pages/Templates'
import dashQuickFill from '@/components/Main/pages/QuickFill'
import dashClients from '@/components/Main/pages/Clients'
import dashHelp from '@/components/Main/pages/Help'
import DocumentBuilderView from './views/Builders/DocumentBuilder'
import docEditorDefault from '@/components/Builders/Pages/EditDocument'

const routes = [
  {
    path: '/',
    component: DashView,
    children: [
      { path: '', name: 'Home', component: dashHome },
      { path: 'Assets', name: 'Assets', component: dashAssets },
      { path: 'Account', name: 'Account', component: dashAccount },
      { path: 'Documents', name: 'Documents', component: dashDocuments },
      { path: '/documentControl/:id', name: 'documentControl', component: DashDocumentControl },
      { path: 'Components', name: 'Components', component: dashComponents },
      { path: 'Templates', name: 'Templates', component: dashTemplates },
      { path: 'Clients', name: 'Clients', component: dashClients },
      { path: 'QuickFill', name: 'QuickFill', component: dashQuickFill },
      { path: 'Help', name: 'Help', component: dashHelp }
    ]
  },
  {
    path: '/DocumentEditor/:back/:path/:id',
    component: DocumentBuilderView,
    children: [
      { path: '', name: 'EditorHome', component: docEditorDefault }
    ]
  },
  { path: '/:catchAll(.*)', component: PageNotFound }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
