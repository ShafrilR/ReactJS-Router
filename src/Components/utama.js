import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Beranda from './beranda'
import Galeri from './galeri'
import HariBesar from './haribesar'

const utama = () => (
    <Switch>
        <Route exact path="/" component={Beranda} />
        <Route path="/galeri" component={Galeri} />
        <Route path="/haribesar" component={HariBesar} />
    </Switch>
)
export default utama;