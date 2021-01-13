import React, { Component } from 'react';
import $ from "jquery";

export class keranjang extends React.Component {
    constructor(){
        super();
        this.state ={
            keranjang : [
                {id: "1", namabarang: "Sabun", harga: "5000", jumlah: "3", total: "15000"},
            ],
            id: "",
            namabarang: "",
            harga: "",
            jumlah: "",
            total: "",
            action: "",
            totalHarga: "Rp 15000"
        }
    }
    render(){
        return(
            <div className="container">
                {/* generate list */}
                <br/>
                <br/>
                <h2 className="text-center">Keranjang Belanja</h2>
                <br/>
                <br/>
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>Nama Barang</th>
                            <th>Harga</th>
                            <th>Jumlah Beli</th>
                            <th>Total</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.keranjang.map((item,index) => {
                            return(
                                <tr key={index}>
                                    <td>{item.namabarang}</td>
                                    <td>{item.harga}</td>
                                    <td>{item.jumlah}</td>
                                    <td>{item.total}</td>
                                    <td>
                                        <div class="btn-group btn-group-toggle">
                                            <label class="btn btn-primary" onClick={() => this.Edit(item)} 
                                            data-toggle="modal" data-target="#modal">
                                                Edit
                                            </label>
                                            <label class="btn btn-danger" onClick={() => this.Drop(index)}>
                                                Hapus
                                            </label>
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                        <tr>
                            <td colSpan="3" align="center">Total Belanja </td>
                            <td colSpan="2" align="center">{this.state.totalHarga}</td>
                        </tr>
                    </tbody>
                </table>
                <div className="btn-toolbar mb-3" >
                    <div className="btn-group mr-2" role="group">
                        <button type="button" className="btn btn-success" onClick={this.Add}
                        data-toggle="modal" data-target="#modal">Tambah Barang</button>
                    </div>
                    <div className="input-group">
                        <div className="input-group-prepend">
                            <div className="input-group-text">Harga</div>
                        </div>
                        <input type="text" className="form-control" value={ this.state.totalHarga }
                        onChange={ (ev) => this.setState({totalHarga : ev.target.value}) } />
                    </div>
                </div>
                {/* <div>
                    <div class="btn-group" role="group" aria-label="Basic example">
                        <button className="btn btn-md btn-success" onClick={this.Add}
                        data-toggle="modal" data-target="#modal">Tambah Barang</button>
                        <button class="btn btn-md btn-secondary">Left</button>
                        <input className="form-control"></input>
                    </div>
                </div> */}

                {/* elemen form modal */}
                <div className="modal fade" id="modal">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header bg-success text-white">
                                <h5>Tambah Barang</h5>
                            </div>
                            <form onSubmit={this.Savekeranjang}>
                                <div className="modal-body">
                                    <input type="hidden" name="id" className="form-control"
                                    onChange={this.bind} value={Math.random()} />
                                    Nama Barang
                                    <input type="text" name="namabarang" className="form-control"
                                    onChange={this.bind} value={this.state.namabarang} />
                                    Harga
                                    <input type="text" name="harga" className="form-control"
                                    onChange={this.bind} value={this.state.harga} />
                                    Jumlah Beli
                                    <input type="text" name="jumlah" className="form-control"
                                    onChange={this.bind} value={this.state.jumlah} />
                                    Total
                                    <input type="text" name="total" className="form-control"
                                    onChange={this.bind} value={this.state.total} />
                                </div>
                                <div className="modal-footer">
                                    <button type="submit" className="btn btn-primary">Simpan</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    bind =(event) =>{
        this.setState({[event.target.name]: event.target.value});
    }

    Savekeranjang = (event) =>{
        event.preventDefault();
        let temp = this.state.keranjang;

        if(this.state.action === "insert"){
            temp.push({
                id: this.state.id,
                namabarang: this.state.namabarang,
                harga: this.state.harga,
                jumlah: this.state.jumlah,
                total: this.state.total
            });
        } else if(this.state.action === "update"){
            let index = temp.findIndex(item => item.id === this.state.id);
            temp[index].namabarang = this.state.namabarang;
            temp[index].harga = this.state.harga;
            temp[index].jumlah = this.state.jumlah;
            temp[index].total = this.state.total;
        }

        this.setState({keranjang:temp});

        $("#modal").modal('hide');
    }

    Add = () =>{
        this.setState({
            id: "",
            namabarang: "",
            harga: "",
            jumlah: "",
            total: "",
            action: "insert"
        });
    }
    

    Edit = (item) => {  
        this.setState({  
            id: item.id,
            namabarang: item.namabarang,
            harga: item.harga,
            jumlah: item.jumlah,
            total: item.total,
            action: "update"
        });  
    }  
        

    Drop = (index) =>{
        let temp = this.state.keranjang;
        temp.splice(index,1);
        this.setState({keranjang: temp});
    }
}

export default keranjang;