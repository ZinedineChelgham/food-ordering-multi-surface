import { useState } from 'react';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import BasicCard from './BasicCard';
import useMediaQuery from "@mui/material/useMediaQuery";
import {useTheme} from "@mui/material/styles";

function IconWithLabelCard(props) {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const icoInfo = props.props;

    const getActionArea = () => {
        return (
            <CardMedia
                sx={{ fontSize:isSmallScreen? '10vw': '9.8vh', margin: 'auto', marginTop: '5%',width: 'inherit',padding:'0'}}
                component={icoInfo.icon}
            />
        )
    }

    const getContent = () => {
        return (
            <Typography gutterBottom variant="h5" component="div" sx={{ textAlign: 'center', fontSize:isSmallScreen? '4vw': '4vh' }}>
                {icoInfo.label}
            </Typography>
        )
    }

    return (
        <BasicCard style={undefined}
                   sx={{backgroundColor:'blue'}}
                   actionArea={getActionArea()}
                   content={getContent()}
        />
    )
}

export default IconWithLabelCard;
