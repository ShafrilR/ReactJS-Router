import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Beranda from './beranda'
import Galeri from './galeri'
import HariBesar from './haribesar'
import Keranjang from './keranjang'
import Gallery from './Gallery'
import Cart from './Cart'
import Pegawai from './Pegawai'

const utama = () => (
    <Switch>
        <Route exact path="/" component={Beranda} />
        <Route path="/galeri" component={Galeri} />
        <Route path="/haribesar" component={HariBesar} />
        <Route path="/keranjang" component={Keranjang} />
        <Route path="/Gallery" component={Gallery} />
        <Route path="/Cart" component={Cart} />
        <Route path="/pegawai" component={Pegawai} />
    </Switch>
)
export default utama;