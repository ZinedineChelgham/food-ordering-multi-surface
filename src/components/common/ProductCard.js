import React from 'react';
import { CardMedia, Button, Grid, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function ProductCard({ image, isFirstItem, isLastItem }) {
    return (
        <Grid container alignItems="center" spacing={2} style={{ marginBottom: '20px', maxWidth: '400px' }}>
            {/* Image on the left */}
            <Grid item xs={6}>
                <CardMedia
                    component="img"
                    width="100%"
                    style={{ height: '100%', objectFit: 'contain' }}
                    image={image}
                    alt="big burger"
                // style={{ width: '100%' }}
                />
            </Grid>
            <Grid item xs={6} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {isLastItem ? (
                    <IconButton color="primary" >
                        <AddIcon />
                    </IconButton>
                ) : !isFirstItem ? (
                    <IconButton color="primary">
                        <RemoveIcon />
                    </IconButton>
                ) : null}
            </Grid>
        </Grid>
    );
}

export default ProductCard;
