import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import BasicCard from './BasicCard';


function IconWithLabelCard(props) {
    const icoInfo = props.props;
    console.log(icoInfo);

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
        <BasicCard
            //style={{ maxWidth: 200, border: 'none' }}
            actionArea={getActionArea()}
            content={getContent()}
        />
    )
}

export default IconWithLabelCard;
