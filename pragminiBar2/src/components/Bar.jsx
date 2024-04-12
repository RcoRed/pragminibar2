import { useState } from 'react'
import '../cssComponents/bar.css'

function Bar() {

  return (
    <div className="blurPesante">
        <h1 id="pragmini" className="neon">13AR</h1>
        <div className="container text-center">
            <div className="row align-items-start staccati">
                <div className="col"></div>
                <div className="col card">
                    <img src="src/images/trancino.png" className="card-img-top aoStacce" alt="..." />
                    <div className="card-body">
                        <p className="card-text">Trancino al cioccolato</p>
                    </div>
                </div>
                <div className="col"></div>
                <div className="col card">
                    <img src="src/images/kinder delice.png" className="card-img-top aoStacce" alt="..." />
                    <div className="card-body">
                        <p className="card-text">Kinder Delice</p>
                    </div>
                </div>
                <div className="col"></div>
                <div className="col card">
                    <img src="src/images/fiesta.png" className="card-img-top aoStacce" alt="..." />
                    <div className="card-body">
                        <p className="card-text">Fiesta</p>
                    </div>
                </div>
                <div className="col"></div>
            </div>
            <div className="row align-items-start staccati">
                <div className="col"></div>
                <div className="col card">
                    <img src="src/images/fake pan di stelle.png" className="card-img-top aoStacce" alt="..." />
                    <div className="card-body">
                        <p className="card-text">Fake Pan di Stelle</p>
                    </div>
                </div>
                <div className="col"></div>
                <div className="col card">
                    <img src="src/images/rollino nocciola.png" className="card-img-top aoStacce" alt="..." />
                    <div className="card-body">
                        <p className="card-text">Rollino nocciola</p>
                    </div>
                </div>
                <div className="col"></div>
                <div className="col card">
                    <img src="src/images/fake fonzies.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text">Fake fonzies</p>
                    </div>
                </div>
                <div className="col"></div>
            </div>
            <div className="row align-items-start staccati">
                <div className="col"></div>
                <div className="col card">
                    <img src="src/images/croccantelle ketchup.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text">Croccantelle ketchup</p>
                    </div>
                </div>
                <div className="col"></div>
                <div className="col card">
                    <img src="src/images/croccantelle prosciutto.png" className="card-img-top aoStacce" alt="..." />
                    <div className="card-body">
                        <p className="card-text">Croccantelle prosciutto</p>
                    </div>
                </div>
                <div className="col"></div>
                <div className="col card staccatiSotto">
                    <img src="src/images/bastoncini di patate.png" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text">Bastoncini di patate</p>
                    </div>
                </div>
                <div className="col"></div>
            </div>
        </div>
    </div>
  )
}

export default Bar
