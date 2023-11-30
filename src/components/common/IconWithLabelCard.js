import { useState } from 'react';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import BasicCard from './BasicCard';


function IconWithLabelCard(props) {
    const icoInfo = props.props;





    const getActionArea = () => {
        return (
            <CardMedia
                sx={{ fontSize: 120, margin: 'auto', marginTop: '5%' }}
                component={icoInfo.icon}
            />
        )
    }

    const getContent = () => {
        return (
            <Typography gutterBottom variant="h5" component="div">
                {icoInfo.label}
            </Typography>
        )
    }

    return (
        <BasicCard style={undefined}
            actionArea={getActionArea()}
            content={getContent()}
        />
    )
}

export default IconWithLabelCard;
