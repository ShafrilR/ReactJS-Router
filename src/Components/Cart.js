import React, {Component} from "react";  
import $ from "jquery";
import Gallery from "./Gallery"
class Cart extends Component {  
    constructor(){  
        super()
        this.state = {
            cart: [], // untuk menyimpan list cart
            user: "", // untuk menyimpan data nama user
            total: 0, // untuk menyimpan data total belanja
            selectedItem: null
        }

    }  
    render(){  
	    return (  
            <div className="container">
                <div className="card col-12 mt-2">
                    <div className="card-header bg-primary text-white">
                        <h4>Data Keranjang Belanja</h4>
                    </div>

                    <div className="card-body">
                        <h5 className="text-primary">
                            Nama User: { this.state.user }
                        </h5>

                        <table className="table table-bordered">
                            <thead>
                                <tr>
                                    <th>Nama Item</th>
                                    <th>Harga</th>
                                    <th>Qty</th>
                                    <th>Total</th>
                                    <th>Button</th>
                                </tr>
                            </thead>

                            <tbody>
                                { this.state.cart.map( (item, index) => (
                                    <tr key={index}>
                                        <td>{item.judul}</td>
                                        <td>Rp {item.harga}</td>
                                        <td>{item.jumlahBeli}</td>
                                        <td>
                                            Rp { item.harga * item.jumlahBeli }
                                        </td>
                                        <td>
                                        <div class="btn-group btn-group-toggle">
                                            <label class="btn btn-primary" onClick={() => this.Edit(item)} 
                                            data-toggle="modal" data-target="#modal">
                                                Edit
                                            </label>
                                            <label class="btn btn-danger" onClick={() => this.Drop(item)}>
                                                Hapus
                                            </label>
                                        </div>
                                        </td>
                                    </tr>
                                ) ) }
                            </tbody>
                        </table>

                        <h4 className="text-danger">
                            Total Harga: Rp {this.state.total}
                        </h4>
                    </div>
                </div>

                {/* component modal sbg control manipulasi data */}
                <div className="modal fade" id="modal_edit">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            {/* modal header */}
                            <div className="modal-header">
                                Form Edit Cart
                            </div>
                            {/* modal body */}    
                                <div className="modal-body">
                                <form onSubmit={ev => this.Save(ev)}>
                                    Jumlah Beli
                                        <input type="text" className="form-control mb-2"
                                        value={this.state.jumlahBeli}
                                        onChange={ ev => this.setState({jumlahBeli: ev.target.value}) }
                                        required />
                                        
                                    <button className="btn btn-info btn-block" type="submit">
                                        Simpan
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

	    );  
    }  

    initCart = () => {
        // memanggil data cart pada localStorage
        let tempCart = []
        if(localStorage.getItem("cart") !== null){
            tempCart = JSON.parse(localStorage.getItem("cart"))
        }
        
        // memanggil data user pada localStorage
        let userName = localStorage.getItem("user")

        // kalkulasi total harga
        let totalHarga = 0;
        tempCart.map(item => {
            totalHarga += (item.harga * item.jumlahBeli)
        })

        // memasukkan data cart, user, dan total harga pada state
        this.setState({
            cart: tempCart,
            user: userName,
            total: totalHarga
        })
    }

    componentDidMount(){
        this.initCart()
    }

    Drop = (item) => {
        // beri konfirmasi untuk menghapus data
        if(window.confirm("Apakah anda yakin ingin menghapus data ini?")){
            // menghapus data
            let tempCart = this.state.cart
            // posisi index data yg akan dihapus
            let index = tempCart.indexOf(item)

            // hapus data
            tempCart.splice(index, 1)

            this.setState({cart: tempCart})

            localStorage.setItem("cart", JSON.stringify(tempCart))
        }
    }

    Edit = (item) => {
        // menampilkan komponen modal
        $("#modal_edit").modal("show")
        this.setState({
            jumlahBeli: item.jumlahBeli,
            action: "update",
            selectedItem: item
        })
    }

    Save = (event) => {
        event.preventDefault();
        // menampung data state buku
        let tempCart = this.state.cart

        this.state.action = "update"
        // menyimpan perubahan data
        let index = tempCart.indexOf(this.state.selectedItem)
        tempCart[index].jumlahBeli = this.state.jumlahBeli
        

        this.setState({cart : tempCart})
        
        // menutup komponen modal_buku
        $("#modal_edit").modal("hide")

        localStorage.setItem("cart", JSON.stringify(tempCart))
    }
}  
export default Cart; 
