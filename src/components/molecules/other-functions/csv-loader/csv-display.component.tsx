import React from 'react';
import { List, ListItem, Typography } from '@mui/material';

interface Props {
    data: string[];
}

const CsvDisplay: React.FC<Props> = ({ data }) => {
    return (
        <List sx={{ width: '100%', mt: 2 }}>
            {data.map((row, index) => 
                <ListItem key={index}>
                    <Typography variant="body1">{row}</Typography>
                </ListItem>
            )}
        </List>
    );
}

export default CsvDisplay;
