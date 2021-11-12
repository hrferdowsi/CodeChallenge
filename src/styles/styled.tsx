import {Paper, styled} from "@mui/material";
import {SxProps} from "@mui/system/styleFunctionSx/styleFunctionSx";


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


export const ImgRibbonStyle: SxProps = {
    fontSize: 12, // font size: sm,lg
    bgcolor: 'white',
    color: 'red',
    p: 0.5,
    position: 'absolute',
    top: 20,
    left: 0,
    zIndex: 'tooltip',
}

