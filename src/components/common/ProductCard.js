import React from 'react';
import { CardMedia, Button, Grid, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function ProductCard({ image, isFirstItem, isLastItem, onRemove, index }) {
    return (
        <Grid container alignItems="center" spacing={2} style={{ marginBottom: '20px', maxWidth: '400px' }}>
            <Grid item xs={6}>
                <CardMedia
                    component="img"
                    width="70%"
                    style={{ height: '70%', objectFit: 'contain' }}
                    image={image}
                    alt="big burger"
                />
            </Grid>
            <Grid item xs={6} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {!isFirstItem && !isLastItem ? (
                    <IconButton color="primary" onClick={() => onRemove(index)}>
                        <RemoveIcon />
                    </IconButton>
                )  : null}
            </Grid>
        </Grid>
    );
}

export default ProductCard;
