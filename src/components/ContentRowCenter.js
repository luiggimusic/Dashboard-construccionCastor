import React from 'react';
import ProductosDestacados from './ProductosDestacados';
import CategoriasProductos from './CategoriasProductos';

function ContentRowCenter(){
    return (
        <div className="row">
            
            {/*<!-- Last Movie in DB -->*/}
            <ProductosDestacados />
            {/*<!-- End content row last movie in Data Base -->*/}

            {/*<!-- Genres in DB -->*/}
            <CategoriasProductos />

        </div>
    )
}

export default ContentRowCenter;