

import { Card, CardActionArea, CardContent } from '@mui/material'
import React from 'react'

function BasicCard({ style, actionArea, content }) {

    console.log(style, actionArea, content);

    return (
        <Card sx={style | undefined}>
            <CardActionArea>
                {actionArea}
            </CardActionArea>
            <CardContent sx={{ textAlign: 'center' }}>
                {content}
            </CardContent>
        </Card>

    )
}

export default BasicCard