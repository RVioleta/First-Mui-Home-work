import {Accordion, 
        Typography, 
        AccordionSummary, 
        AccordionDetails,
         
        Container, 
        Stack} 
        from "@mui/material";

        import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
const Accordian1 = () => {
 return (
    <Container style={{marginTop:50}}>
        <Stack>
            <Accordion>
                <AccordionSummary expandIcon={<UnfoldMoreIcon/>}>
                    <Typography variant="h6">
                     Title 1  
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis aliquid doloribus nihil eius laborum reiciendis,
                        aspernatur ipsum, cupiditate amet consequatur nisi minima illo facilis dolore pariatur provident.  
                        tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis aliquid doloribus nihil eius laborum reiciendis,
                        aspernatur ipsum, cupiditate amet consequatur nisi minima illo facilis dolore pariatur provident. 

                    </Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion>
                <AccordionSummary expandIcon={<UnfoldMoreIcon/>}>
                    <Typography variant="h6">
                     Title 2  
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant="body2">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis aliquid doloribus nihil eius laborum reiciendis,
                        aspernatur ipsum, cupiditate amet consequatur nisi minima illo facilis dolore pariatur provident.  
                        tenetur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis aliquid doloribus nihil eius laborum reiciendis,
                        aspernatur ipsum, cupiditate amet consequatur nisi minima illo facilis dolore pariatur provident.                    tenetur.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Stack>
    </Container>
 )
};

export default Accordian1;