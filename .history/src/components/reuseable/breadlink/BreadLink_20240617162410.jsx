import React from 'react'
import Crumbs from '../breadcrumbs/Crumbs'

function BreadLink() {
    const styles = {
        
    }
  return (
    <div style={styles.header}>
      <h2>{name}</h2>
      <Crumbs>Shop</Crumbs>
    </div>
  );
}

export default BreadLink
