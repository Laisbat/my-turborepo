import { Box, Card, IconButton, Typography } from "@mui/material";
import type { GroupinFormationProps } from "./GroupinFormation.types";
import ParcelaReduzida from "../../assets/images/pacelaReduzida.svg";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import Button from "../Button";
import { numberFormater } from "../../utils/format";


const GroupinFormation = ({
    isClicked, isDisabledButton,
    numberMaxQtd, creditValue, parcelValues }: GroupinFormationProps) => {

    const [qtd, setQtd] = useState(0);
    const handleClickAdd = () => {
        if (qtd < numberMaxQtd) setQtd(qtd + 1);
    }

    const handleClickRemove = () => {
        if (qtd > 0) setQtd(qtd - 1);
    }
    return (
        <Card sx={{
            cursor: isClicked ? 'pointer' : 'auto',
            width: '100%', height: 152,
            bgcolor: '#fff', p: 2, gap: 2,
            display: 'flex', justifyContent: 'space-between',
            border: '1px solid red'
        }}>
            <Box sx={{
                display: 'flex',
                width: '100%',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignContent: 'flex-start',
                alignItems: 'flex-start',
                gap: 0.5
            }}>
                <Typography sx={{ fontWeight: 'light' }}>Valor do crédito</Typography>
                <span>R$ <span style={{ fontWeight: 'bold', fontSize: '18px' }}>{numberFormater(creditValue)}</span>  </span>
                <Typography sx={{ fontWeight: 'light' }}>Grupo: <span style={{ fontWeight: 'bold', fontSize: '14px' }}>100001</span></Typography>

                <Typography sx={{ fontWeight: 'light' }}>Cotas Vagas: <span style={{ fontWeight: 'bold', fontSize: '14px' }}>11</span></Typography>
            </Box>
            <Box sx={{ width: '100%', }}>
                <Typography sx={{ fontWeight: 'light' }}>Parcelas de</Typography>
                <span style={{ fontWeight: 'normal', fontSize: '14px', textDecoration: 'line-through' }}>R$ 545,99</span>
                <Typography sx={{ fontWeight: 'light', fontSize: 14 }}>R$ <span style={{ fontSize: 18, fontWeight: 'bold' }}>{numberFormater(parcelValues)}</span> em 255 meses</Typography>
                <Typography sx={{ fontWeight: 'light', fontSize: 14 }}>Lance Mínimo últimos 3 meses: <span style={{ fontWeight: 'bold', }}>69%</span> </Typography>
            </Box>
            <Box sx={{
                display: 'flex',
                width: '100%',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignContent: 'flex-start',
                alignItems: 'flex-start',
                gap: 0.5
            }}>
                <Typography sx={{ fontWeight: 'light' }}>Taxa de Administração de</Typography>
                <Typography sx={{ fontWeight: 'light' }}>
                    <span style={{ fontWeight: 'normal', fontSize: 14, textDecoration: 'line-through' }}>24%</span>
                    <span style={{ fontWeight: 'bold', fontSize: 18, marginLeft: 2 }}>18%</span>
                </Typography>
                <Typography sx={{ fontWeight: 'light', fontSize: 14 }}>Cota apta ao Sortudão</Typography>
                <Typography sx={{ fontWeight: 'light', fontSize: 14 }}>Permite lance embutido</Typography>
            </Box>
            <Box sx={{
                display: 'flex',
                width: '100%',
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignContent: 'flex-start',
                alignItems: 'flex-start',
                gap: 0.5,
            }}>
                <img src={ParcelaReduzida} alt="Omagem promocional" />
                <Typography sx={{ fontWeight: 'light' }}>Parcelas 30% menores por 80 meses, ou até a contemplação </Typography>
            </Box>
            <Box sx={{ border: '1px solid #D0E0E4', }}></Box>
            <Box sx={{
                width: 500, display: 'flex',
                textAlign: 'center',
                gap: 1,
                flexDirection: 'column', justifyContent: 'center', alignContent: 'center'
            }}>
                <Typography fontWeight={600} fontSize={12}>Quantidade</Typography>
                {qtd == 0 ? <Button variant="outlined" color="secondary" disabled={isDisabledButton} onClick={handleClickAdd} >Contratar</Button> :
                    <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, alignItems: 'center' }}>
                        <IconButton onClick={handleClickRemove} disabled={isDisabledButton}>
                            <FaMinus color="#005CA9" />
                        </IconButton>
                        <Typography width={70} p={'5px'}
                            border={'1px solid #9EB2B8'}
                            textAlign='center' color="#9EB2B8" fontSize={14} borderRadius={'4px'}>{qtd}</Typography>
                        <IconButton onClick={handleClickAdd} disabled={isDisabledButton || (qtd >= numberMaxQtd)}>
                            <FaPlus color={isDisabledButton || (qtd >= numberMaxQtd) ? "#9EB2B8" : "#005CA9"} />
                        </IconButton>
                    </Box>}

            </Box>
        </Card>
    );
}

export default GroupinFormation;
