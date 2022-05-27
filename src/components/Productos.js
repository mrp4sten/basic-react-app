import { Component } from 'react';

import Producto from './Producto'

const styles = {
  productos: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
}

class Productos extends Component {
    render() {
        const { productos, agregaAlCarro } = this.props;
        return (
          <div style={styles.productos}>
            {productos.map((p) => (
              <Producto
                agregarAlCarro={agregaAlCarro}
                key={p.name}
                producto={p}
              />
            ))}
          </div>
        );
    }
}

export default Productos;