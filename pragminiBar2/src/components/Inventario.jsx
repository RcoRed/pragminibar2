import { useState } from 'react'
import '../cssComponents/inventario.css'

function Inventario() {

  return (
    <div className="blurPesante">
        <h1 id="pragmini" className="neon">13AR</h1>
        <div className="container text-center">
            <div className="row align-items-start staccati">
                <div className="col"></div>
                <div className="col card">
                    <img src="trancino.png" className="card-img-top aoStacce" alt="..." />
                    <div className="card-body">
                        <p className="card-text">Trancino al cioccolato</p>
                    </div>
                </div>
                <div className="col"></div>
                <div className="col card">
                    <img src="kinder delice.png" className="card-img-top aoStacce" alt="..." />
                    <div className="card-body">
                        <p className="card-text">Kinder Delice</p>
                    </div>
                </div>
                <div className="col"></div>
                <div className="col card">
                    <img src="fiesta.png" className="card-img-top aoStacce" alt="..." />
                    <div className="card-body">
                        <p className="card-text">Fiesta</p>
                    </div>
                </div>
                <div className="col"></div>
            </div>
        </div>
    </div>
  )
}

export default Inventario
