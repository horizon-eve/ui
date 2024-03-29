import Vue from 'vue'
import Router from 'vue-router'
// Horizon components:
import Login from 'components/Login'
import LoginVerify from 'components/LoginVerify'
import ItemLists from 'components/Market_ItemLists'
import ItemListDetails from 'components/Market_ItemListDetails'
import MarketWatchLists from 'components/Market_WatchLists'
import WatchListDetails from 'components/Market_WatchListDetails'
import MarketAvailability from 'components/Market_Availability'
import ResearchJobs from 'components/Science_ResearchJobs'
// Samples:
import DashboardV1 from 'examples/Dashboard.v1.vue'
import DashboardV2 from 'examples/Dashboard.v2.vue'
import InfoBoxExample from 'examples/InfoBoxExample'
import ChartExample from 'examples/ChartExample'
import AlertExample from 'examples/AlertExample'
import ModalExample from 'examples/ModalExample'
import WidgetsExample from 'examples/WidgetsExample'
import APIExample from 'examples/APIExample'

// UI Element Groups
import General from 'pages/ui-elements/General.vue'
import Icons from 'pages/ui-elements/Icons.vue'
import Buttons from 'pages/ui-elements/Buttons.vue'
import Sliders from 'pages/ui-elements/Sliders.vue'
import Timeline from 'pages/ui-elements/Timeline.vue'
import Modals from 'pages/ui-elements/Modals.vue'

// forms
import GeneralElements from 'pages/forms/GeneralElements.vue'
import AdvancedElements from 'pages/forms/AdvancedElements.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: { layout: 'login', public: true }
    },
    {
      path: '/login/verify',
      name: 'LoginVerify',
      component: LoginVerify,
      meta: { layout: 'login', public: true }
    },
    {
      path: '/item-lists',
      name: 'Market_ItemLists',
      component: ItemLists,
      meta: { pageName: 'Item Lists' }
    },
    {
      path: '/item-lists/:listId',
      name: 'Market_ItemListDetail',
      component: ItemListDetails,
      meta: { pageName: 'Item List Details' }
    },
    {
      path: '/market-watch-lists',
      name: 'Market_WatchLists',
      component: MarketWatchLists,
      meta: { pageName: 'Market Watch Lists' }
    },
    {
      path: '/market-watch-lists/:listId',
      name: 'Market_WatchListDetail',
      component: WatchListDetails,
      meta: { pageName: 'Watch List Details' }
    },
    {
      path: '/market-availability',
      name: 'Market_Availability',
      component: MarketAvailability,
      meta: { pageName: 'Market Availability' }
    },
    {
      path: '/research-jobs',
      name: 'Science_ResearchJobs',
      component: ResearchJobs,
      meta: { pageName: 'Research Jobs' }
    },
    {
      path: '/dashboard/v1',
      name: 'DashboardV1',
      component: DashboardV1
    },
    {
      path: '/dashboard/v2',
      name: 'DashboardV2',
      component: DashboardV2
    },
    {
      path: '/examples/infobox',
      name: 'InfoBoxExample',
      component: InfoBoxExample
    },
    {
      path: '/examples/chart',
      name: 'ChartExample',
      component: ChartExample
    },
    {
      path: '/examples/alert',
      name: 'AlertExample',
      component: AlertExample
    },
    {
      path: '/examples/modal',
      name: 'ModalExample',
      component: ModalExample
    },
    {
      path: '/examples/widgets',
      name: 'WidgetsExample',
      component: WidgetsExample
    },
    {
      path: '/examples/api-example',
      name: 'APIExample',
      component: APIExample
    },
    {
      path: '/ui-elements/general',
      name: 'General',
      component: General
    },
    {
      path: '/ui-elements/icons',
      name: 'Icons',
      component: Icons
    },
    {
      path: '/ui-elements/buttons',
      name: 'Buttons',
      component: Buttons
    },
    {
      path: '/ui-elements/sliders',
      name: 'Sliders',
      component: Sliders
    },
    {
      path: '/ui-elements/timeline',
      name: 'Timeline',
      component: Timeline
    },
    {
      path: '/ui-elements/modals',
      name: 'Modals',
      component: Modals
    },
    {
      path: '/forms/general-elements',
      name: 'GeneralElements',
      component: GeneralElements
    },
    {
      path: '/forms/advanced-elements',
      name: 'AdvancedElements',
      component: AdvancedElements
    }
  ],
  linkActiveClass: 'active'
})

router.beforeEach((to, from, next) => {
  if (to.meta && to.meta.public === true) {
    next()
  } else {
    let auth = JSON.parse(localStorage.getItem('auth'))
    if (auth && auth.auth_token) {
      next()
    } else {
      let login = JSON.parse(localStorage.getItem('login'))
      if (!login) {
        login = {}
      }
      login.callback = to.fullPath
      localStorage.setItem('login', JSON.stringify(login))
      next({name: 'Login'})
    }
  }
})

export default router
