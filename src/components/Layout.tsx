import React, {useCallback} from 'react';
import {ButtonBase, Container, FormControl, Grid, MenuItem, Select, styled, Typography} from "@mui/material";
import qantasLogo from "../utils/qantasLogo.png";


const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

type layoutProps = {
    list: Accommodation[],
    order: searchOrder,
    setOrder: any
}
const Layout = ({list, order, setOrder}: layoutProps): JSX.Element => {

    const handleChange = useCallback((event) => {
        setOrder(event.target.value);
    }, [setOrder])


    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item>
                    <ButtonBase sx={{width: 128, height: 128}}>
                    <span>
                    <Img alt={qantasLogo} src={qantasLogo} loading={"lazy"}/>
                        {list.length} hotels in Sydney
                    </span>
                    </ButtonBase>
                </Grid>
                <Grid item>
                    <Typography variant="subtitle1" component="div">
                        Sort by:
                    </Typography>
                    <FormControl sx={{m: 1, minWidth: 120}}>
                        <Select
                            value={order}
                            onChange={handleChange}
                            inputProps={{'aria-label': 'Without label'}}
                        >
                            <MenuItem value={'hl'}>Price High-Low</MenuItem>
                            <MenuItem value={"lh"}>Price Low-High</MenuItem>
                        </Select>
                    </FormControl>
                </Grid>
            </Grid>
        </Container>

    );
};


export default Layout;