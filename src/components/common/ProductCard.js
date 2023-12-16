import React from 'react';
import { CardMedia, Button, Grid, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function ProductCard({ image, canRemove, onRemove }) {
    return (
      <Grid container alignItems="center" spacing={2} style={{ marginBottom: '20px', maxWidth: '400px' }}>
        <Grid item xs={6}>
          <CardMedia
            component="img"
            width="70%"
            style={{ height: '70%', objectFit: 'contain' }}
            image={image}
            alt="Item"
          />
        </Grid>
        <Grid item xs={6} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          {canRemove && (
            <IconButton color="primary" onClick={onRemove}>
              <RemoveIcon />
            </IconButton>
          )}
        </Grid>
      </Grid>
    );
  }
  

export default ProductCard;
