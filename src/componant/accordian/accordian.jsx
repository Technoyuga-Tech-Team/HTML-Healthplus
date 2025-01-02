import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { faqConstants } from '@/constant/staticData';

export default function ControlledAccordions() {
    const [expanded, setExpanded] = React.useState(null);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div>
            {
                faqConstants?.map((a, index) => {
                    return (
                        <>
                            <Accordion
                                sx={[
                                    expanded === index
                                        ? {
                                            '&::before': {
                                                backgroundColor: "transparent"
                                            },
                                            fontFamily: "font-medium",
                                            mb: 3,
                                            background: "#fff",
                                            border: "1px solid rgba(34, 54, 69, 0.2)",
                                            boxShadow: "none",
                                            borderRadius: "80px !important",
                                            '& .MuiAccordion-region': {
                                                height: 'auto',
                                            },
                                            '& .MuiAccordionDetails-root': {
                                                display: 'block',
                                            },
                                        }
                                        : {
                                            '&::before': {
                                                backgroundColor: "transparent",
                                            },
                                            fontFamily: "font-medium",
                                            mb: 3,
                                            boxShadow: "none",
                                            background: "#fff",
                                            border: "1px solid rgba(34, 54, 69, 0.2)",
                                            borderRadius: "80px !important",
                                            '& .MuiAccordion-region': {
                                                height: 0,
                                            },
                                            '& .MuiAccordionDetails-root': {
                                                display: 'none',
                                            },
                                        },
                                ]}
                                expanded={expanded === index}
                                onChange={handleChange(index)}>
                                <AccordionSummary
                                    expandIcon={<div style={{ background: "rgba(54, 128, 127, 0.2)", borderRadius: "50%", color: "var(--primary-color)" }}><ExpandMoreIcon /></div>}
                                    aria-controls={`panel${index + 1}-content`}
                                    id={`panel${index + 1}-header`}
                                >
                                    <Typography
                                        style={{
                                            border: "1px solid rgba(34, 54, 69, 0.2)",
                                            color: "var(--primary-color)",
                                            width: "30px",
                                            height: "30px",
                                            borderRadius: "50%",
                                            display: "flex",
                                            justifyContent: "center",
                                            paddingTop: "2px",
                                            alignItems: "center",
                                            marginRight: "15px",
                                        }}
                                    >{index + 1}</Typography>
                                    <Typography
                                        style={{
                                            color: "#272D37",
                                            fontFamily: "font-medium",
                                            fontSize: "16px",
                                            paddingTop: "2.2px",
                                        }}
                                    >{a?.title}</Typography>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Typography
                                        style={{
                                            color: "#36414C",
                                        }}
                                    >
                                        {a?.description}
                                    </Typography>
                                </AccordionDetails>
                            </Accordion>
                        </>
                    )
                })
            }
        </div>
    );
}
