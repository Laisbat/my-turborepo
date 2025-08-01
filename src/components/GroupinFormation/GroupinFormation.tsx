import { Box, Divider, IconButton, Paper, Radio, Typography } from "@mui/material";
import type { GroupinFormationProps } from "./GroupinFormation.types";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import Button from "../Button";
import { MdInfoOutline } from "react-icons/md";
import SvgIcon from "../SvgIcon/SvgIcon";
import { numberFormater } from "../../utils/formatter";


const GroupinFormation = ({
    isClicked, isDisabledButton,
    numberMaxQtd, creditValue, parcelValues,
    iconPromo, insuranceSelected = false,
    insuranceOnSelect = () => { },
    insuranceHave = false }: GroupinFormationProps) => {

    const [qtd, setQtd] = useState(0);
    const handleClickAdd = () => {
        if (qtd < numberMaxQtd) setQtd(qtd + 1);
    }

    const handleClickRemove = () => {
        if (qtd > 0) setQtd(qtd - 1);
    }
    return (
        <Box sx={{   bgcolor: '#fff', border: '1px solid #D0E0E3', borderRadius: '5px', gap: 2, display: 'flex', flexDirection: 'column' }}>

            <Box sx={{
                cursor: isClicked ? 'pointer' : 'auto',
                width: '100%', height: 152,
                bgcolor: '#fff', p: 2, gap: 2,
                display: 'flex', justifyContent: 'space-between',

            }}>
                <Box
                    sx={{
                        position: 'absolute',
                        top: -5,
                        left: 50,
                        backgroundColor: '#fff',
                        px: 1,
                        fontSize: 14,
                        color: '#64747A',
                        fontWeight: 'regular',
                        border: '1px solid #D0E0E3',
                        borderRadius: '5px'
                    }}
                >
                    Grupo em Formação
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
                    {iconPromo ? <SvgIcon icon={iconPromo} /> : ''}
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

            </Box>
            {
                insuranceHave ?
                    <Box flexDirection={'column'} gap={1} display={'flex'}>
                        <Typography pl={10} fontSize={18} > Seu Consórcio protegido com seguro.</Typography>
                        <Box p={1} display={'flex'} gap={1}>
                            <Paper
                                variant="outlined"
                                sx={{
                                    backgroundColor: '#fff',
                                    borderColor: insuranceSelected ? '#005CA9' : '#ccc',
                                    borderWidth: 1,
                                    borderRadius: 1,
                                    position: 'relative',
                                    p: 2,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    gap: 2,
                                    minHeight: 72,
                                }}
                                onClick={insuranceOnSelect}
                            >
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        top: -10,
                                        left: 16,
                                        backgroundColor: '#fff',
                                        border: '1px solid #005CA9',
                                        borderRadius: 2,
                                        px: 1,
                                        fontSize: 12,
                                        color: '#005CA9',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    {'Melhor opção'}
                                </Box>

                                <IconButton
                                    size="small"
                                    sx={{ position: 'absolute', top: -13, right: 8 }}
                                >
                                    <MdInfoOutline color="#005CA9" />
                                </IconButton>

                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <Radio
                                        checked={insuranceSelected}
                                        onChange={insuranceOnSelect}
                                        sx={{
                                            color: '#005CA9',
                                            '&.Mui-checked': {
                                                color: '#005CA9',
                                            },
                                        }}
                                    />
                                    <Typography variant="body1">{'Seguir com seguro'}</Typography>
                                </Box>
                                <Divider orientation="vertical" flexItem />

                                <Box sx={{ textAlign: 'right' }}>
                                    <Typography variant="caption" fontWeight={'light'} color="textSecondary" fontSize={'12px'}>
                                        Primeira parcela:
                                    </Typography>
                                    <Typography fontSize={14}>
                                        <span>R$ <span style={{ fontWeight: 'lighter', fontSize: '18px' }}>{numberFormater(parcelValues)}</span>  </span>
                                    </Typography>
                                </Box>
                            </Paper>
                            <Paper
                                variant="outlined"
                                sx={{
                                    borderColor: !insuranceSelected ? '#005CA9' : '#ccc',
                                    borderWidth: 1,
                                    borderRadius: 1,
                                    position: 'relative',
                                    p: 2,
                                    display: 'flex',
                                    backgroundColor: '#fff',
                                    alignItems: 'center',
                                    justifyContent: 'space-between',
                                    gap: 2,
                                    minHeight: 72,
                                }}
                                onClick={insuranceOnSelect}
                            >

                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                    <Radio
                                        checked={!insuranceSelected}
                                        onChange={insuranceOnSelect}
                                        sx={{
                                            color: '#005CA9',
                                            '&.Mui-checked': {
                                                color: '#005CA9',
                                            },
                                        }}
                                    />
                                    <Typography variant="body1">{'Seguir com seguro'}</Typography>
                                </Box>
                                <Divider orientation="vertical" flexItem />

                                <Box sx={{ textAlign: 'right' }}>
                                    <Typography variant="caption" fontWeight={'light'} color="textSecondary" fontSize={'12px'}>
                                        Primeira parcela:
                                    </Typography>
                                    <Typography fontSize={14}>
                                        <span>R$ <span style={{ fontWeight: 'lighter', fontSize: '18px' }}>{numberFormater(parcelValues)}</span>  </span>
                                    </Typography>
                                </Box>
                            </Paper>
                        </Box></Box> : null
            }

        </Box>
    );
}

export default GroupinFormation;
