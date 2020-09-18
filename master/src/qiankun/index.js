import Vue from 'vue'
import store from '../store'
import microApps from './microApps'
import './initGlobalState'
import { registerMicroApps, start, initGlobalState } from 'qiankun'

registerMicroApps(microApps, {
  beforeLoad: [
    app => {
      store.commit('changeMicroLoading', true)
      // console.log('[LifeCycle] before load %c%s', 'color: red;', app.name)
    }
  ],
  beforeMount: [
    app => {
      store.commit('changeMicroLoading', false)
      // console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name)
    }
  ],
  afterUnmount: [
    app => {
      // console.log(app)
    }
  ]
})

start()