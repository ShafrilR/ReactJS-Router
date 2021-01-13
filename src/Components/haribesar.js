import React, { Component } from 'react';
import $ from "jquery";

export class haribesar extends Component {
    constructor(){
        super();
        this.state ={
            haribesar : [
                {id: "1", hari: "Hari Gerakan Sejuta Pohon", tanggal: "10 Januari"},
                {id: "2", hari: "Hari Peduli Sampah Nasional", tanggal: "21 Februari"},
                {id: "3", hari: "Hari Kehutanan Sedunia", tanggal: "21 Maret"},
                {id: "4", hari: "Hari Air Sedunia", tanggal: "22 Maret"},
                {id: "5", hari: "Earth Hour", tanggal: "30 Maret"},
                {id: "6", hari: "Hari Bumi", tanggal: "22 April"},
                {id: "7", hari: "Hari Lingkungan Hidup Sedunia", tanggal: "5 Juni "},
            ],
            id: "",
            hari: "",
            tanggal: "",
            action: ""
        }
    }
    render(){
        return(
            <div className="container">
                {/* generate list */}
                <br/>
                <br/>
                <h2 className="text-center">Hari Besar Lingkungan Hidup</h2>
                <br/>
                <br/>
                <ul className="list-group">
                    {this.state.haribesar.map((item,index) => {
                        return(
                            <li className="list-group-item" key={index}>
                                <h5 className="text-info">{item.hari}</h5>
                                <h6>Tanggal: {item.tanggal}</h6>

                                <button className="btn btn-sm btn-primary m-1" 
                                onClick={() => this.Edit(item)} 
                                data-toggle="modal" data-target="#modal">
                                    Edit
                                </button>
                                <button className="btn btn-sm btn-danger m-1" 
                                onClick={() => this.Drop(index)}>Hapus</button>
                            </li>
                        );
                    })}
                </ul>
                <button className="btn btn-sm btn-success m-3" onClick={this.Add}
                data-toggle="modal" data-target="#modal">Tambah Data</button>

                {/* elemen form modal */}
                <div className="modal fade" id="modal">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header bg-success text-white">
                                <h5>Form haribesar</h5>
                            </div>
                            <form onSubmit={this.Saveharibesar}>
                                <div className="modal-body">
                                    <input type="hidden" name="id" className="form-control"
                                    onChange={this.bind} value={Math.random()} />
                                    Nama Peringatan
                                    <input type="text" name="hari" className="form-control"
                                    onChange={this.bind} value={this.state.hari} />
                                    Tanggal
                                    <input type="text" name="tanggal" className="form-control"
                                    onChange={this.bind} value={this.state.tanggal} />
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
        // fungsi ini digunakan untuk memasukkan data dari elemen input
        // ke variable state. contoh ketika input diisi id, maka secara
        // otomatis variable id pada state bernilai sesuai dengan inputan,
    }

    Saveharibesar = (event) =>{
        event.preventDefault();
        // temp digunakan untuk menyimpan sementara data array haribesar
        let temp = this.state.haribesar;

        if(this.state.action === "insert"){
            //temp akan ditambahkan dengan data haribesar yang baru
            // sesuai dengan data yang dimasukkan pada form
            temp.push({
                id: this.state.id,
                hari: this.state.hari,
                tanggal: this.state.tanggal
            });
        } else if(this.state.action === "update"){
            // mencari index data yanng akan diubah
            let index = temp.findIndex(item => item.id === this.state.id);
            // mengubah data array sesuai dengan masukan pada form
            temp[index].hari = this.state.hari;
            temp[index].tanggal = this.state.tanggal;
        }

        // array haribesar diupdate dengan nilai data temp
        this.setState({haribesar:temp});

        //menutup modal
        $("#modal").modal('hide');
    }

    Add = () =>{
        // mengosongkan nilai id, hari, dan tanggal
        // pada saat tombol add ditekan
        this.setState({
            id: "",
            hari: "",
            tanggal: "",
            action: "insert"
        });
    }

    Edit = (item) => {  
        this.setState({  
            id: item.id,  
            hari: item.hari,  
            tanggal: item.tanggal,  
            action: "update"  
        });  
    }  
        

    Drop = (index) =>{
        // temp digunakan untuk menyimpan sementara
        // data array haribesar
        let temp = this.state.haribesar;

        // menghapus data pada index yang dihapus
        temp.splice(index,1);

        // array haribesar diupdate dengan nilai data temp
        this.setState({haribesar: temp});
    }
}

export default haribesar;