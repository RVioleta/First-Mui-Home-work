
import {ToggleButton,ToggleButtonGroup,Typography} from "@mui/material";


const Footer = () => {

    const onYes = () =>{
        alert("Thank you")
    }
    const onNo = () =>{
        alert("Are you sure?")
    }
    return (<div>
        <Typography variant="h4" style={{marginTop:25}}>
        Do you like my web page?
        </Typography>
        <ToggleButtonGroup style={{marginTop:25, marginBottom:25}} >
            
            <ToggleButton onClick={onYes}>Yes</ToggleButton>
            <ToggleButton onClick={onNo}>No</ToggleButton>  
       
      </ToggleButtonGroup>
    </div>
        
    );
   
};

export default Footer;

