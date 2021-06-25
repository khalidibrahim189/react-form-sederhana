import React, {Component, useState} from 'react';

// import Header from './Header';

function App() {
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [name, setName] = useState('')

  const sumbitHandler = (e) => {
        e.preventDefault();
        setName(`${firstname} ${lastname}`)
        setFirstname('')
        setLastname('')
  }

  return (
    <div className="p-5">
    <div className="container">
        <div className="row">
            <div className="col-md-6">
                <div className="card">
                    <div className="card-header text-center">Data mahasiswa</div>
                    <div className="card-body">
                        <form onSubmit={sumbitHandler}>
                            <div className="mb-3">
                                <label htmlFor="firstname" className="form-label">Firstname</label>
                                <input type="text" value={firstname} onChange={(event) => setFirstname(event.target.value)} name="firstname" id="firstname" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="lastname" className="form-label">Lastname</label>
                                <input type="text" value={lastname} onChange={(event) => setLastname(event.target.value)} name="lastname" id="lastname" className="form-control" />
                            </div>
                            <button className="btn btn-primary btn-block">Show</button>
                        </form>
                    </div>

                    <div className="card-footer">
                      Nama : {name ? name : '...'}
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
  );
}

export default App;
