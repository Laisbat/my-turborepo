import React from 'react';
import {
    Accordion as MuiAccordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Box,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export interface AccordionItem {
    title: string;
    content: React.ReactNode;
}

export interface AccordionProps {
    items: AccordionItem[];
    defaultExpandedIndex?: number;
}

const Accordion: React.FC<AccordionProps> = ({ items, defaultExpandedIndex }) => {
    const [expanded, setExpanded] = React.useState<number | null>(
        defaultExpandedIndex ?? null
    );

    const handleChange = (index: number) => (_event: React.SyntheticEvent, isExpanded: boolean
    ) => {
        setExpanded(isExpanded ? index : null);
    };

    return (
        <Box>
            {items.map((item, index) => (
                <MuiAccordion
                    key={index}
                    expanded={expanded === index}
                    onChange={handleChange(index)}
                >
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <Typography variant="subtitle1" fontWeight={600}>
                            {item.title}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>{item.content}</AccordionDetails>
                </MuiAccordion>
            ))}
        </Box>
    );
};

export default Accordion;
