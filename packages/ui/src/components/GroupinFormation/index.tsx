import { Box, Card, Typography } from "@mui/material";
import Button from "../Button";
import type { GroupinFormationProps } from "./GroupinFormation.types";


const GroupinFormation = ({ isClicked }: GroupinFormationProps) => {

    return (
        <Card sx={{
            cursor: isClicked ? 'pointer' : 'auto',
            width: '100%', height: 152,
            bgcolor: '#fff', p: 2, gap: 2,
            display: 'flex', justifyContent: 'space-between',
            border: '1px solid red'
        }}>
            <Box sx={{
                border: '1px solid red', display: 'flex',
                width: '100%',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignContent: 'flex-start',
                alignItems: 'flex-start',
                gap: 0.5
            }}>
                <Typography>Valor do crédito</Typography>
                <span>R$ <span style={{ fontWeight: 'bold', fontSize: '18px' }}>0,00</span>  </span>
            </Box>
            <Box sx={{ border: '1px solid red' }}></Box>
            <Box sx={{ border: '1px solid red' }}></Box>
            <Box sx={{
                border: '1px solid red', display: 'flex',
                flexDirection: 'column', justifyContent: 'center', alignContent: 'center'
            }}>
                <h4>Quantidade</h4>
                <Button variant="outlined" color="secondary" >Contratar</Button>
            </Box>
        </Card>
    );
}

export default GroupinFormation;
