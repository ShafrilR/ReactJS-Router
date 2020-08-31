import React, { Component } from 'react'
import Media from './Media';

export class Galeri extends Component {
    render() {
        return (
            <div className="container">
                <br/>
                <br/>
                <h3 className="text-center">Toga</h3>
                <br/>
                <br/>
                <Media image="rosella.png" title="Bunga Rosella">  
                    Bunga rosella adalah tanaman obat keluarga yang bukan hanya dapat diolah
                    menjadi obat melainkan juga teh. Kandungan vitamin C dalam bunga rosella
                    mampu meningkatkan imunitas. Oleh sebab itu, bunga rosella dapat dijadikan
                    pereda batuk, flu, demam, ataupun nyeri haid. Keistimewaan lainnya adalah
                    flavonoidnya yang bersifat antidepresan, sehingga bisa meredakan rasa cemas
                    dan membuat pengonsumsinya rileks. Khasiat lain yang dimiliki bunga rosella
                    diantaranya adalah melangsingkan badan, menyehatkan organ hati, dan mencegah
                    tumor dan kanker.
                </Media>  
                <Media image="daun_sirih.jpg" title="Daun Sirih Merah">  
                    Sudah tak diragukan lagi, daun sirih merah memiliki banyak
                    khasiat dalam penyembuhan penyakit. Kandungan Polevenolad dan
                    Flavonoid yang dimilikinya dapat dijadikan sebagai penyembuhan
                    kanker, antioksidan, antiseptik, sampai antiiflamasi. Tak hanya itu,
                    uegenol yang terkandung di dalamnya dapat digunakan untuk meredakan
                    rasa sakit. Karvakrol yang ada di dalamnya bisa mengatasi bau mulut
                    dan keputihan.
                </Media>
                <Media image="kencur.jfif" title="Kencur">  
                    Tanaman toga yang bernama kencur ini mengandung banyak minyak astiri
                    dan antioksidan. Kencur termasuk tanaman yang cepat subur dan mudah perawatannya.
                    Sebagai jamu-jamuan, kencur dapat diramu menjadi jamu untuk mengobati flu, kembung,
                    batuk, dan mulas. Kandungan yang dimiliki kencur mampu meredakan radang lambung, keseleo,
                    sakit kepala, diare, dan bahkan menyehatkan organ ginjal.  
                </Media>  
            </div>
        )
    }
}

export default Galeri;