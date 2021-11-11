import {Paper, styled} from "@mui/material";


export const Wrapper = styled(Paper)(({theme}) => ({
    padding: theme.spacing(0.7),
    textAlign: 'left',
    boxShadow: "none"
}));


export const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});


