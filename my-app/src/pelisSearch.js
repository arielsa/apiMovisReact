import React from "react";

function PelisSearch (){

    const onSearchValue = (evento) => {
      console.log(evento.target.value);
    }

    return(
        <React.Fragment>

            <div className="input-group mb-3">
                <div className="input-group-prepend">
                    <button className="btn btn-outline-primary" type="button">Random</button>
                </div>
                <input onChange={onSearchValue}   className="form-control PelisSearch " placeholder="buscar pelicula"  aria-describedby="basic-addon1"/>
            </div>

        </React.Fragment>
    )

}

export {PelisSearch}