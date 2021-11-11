import React, {useCallback} from 'react';
import {
    Stack,
    ButtonBase,
    Grid,
    Typography,
    Select,
    MenuItem,
    FormControl,
} from "@mui/material";
import qantasLogo from "../utils/qantasLogo.png";
import {Wrapper, Img} from './common';


type headerProps = {
    list: Accommodation[],
    order: searchOrder,
    setOrder: any
}


const Header: React.FC<headerProps> = ({list, order, setOrder}) => {
    const handleChange = useCallback((event) => {
        setOrder(event.target.value);
    }, [ setOrder])

    return (
        <Wrapper>
            <Grid container direction="row" spacing={1}>
                <Grid item>
                    <Stack>
                        <ButtonBase sx={{width: 145, height: 60}}>
                            <Img alt={qantasLogo} src={qantasLogo} loading={"lazy"}/>
                        </ButtonBase>
                        <Typography variant="subtitle1" gutterBottom>
                            {list.length} hotels in Sydney
                        </Typography>
                    </Stack>
                </Grid>
                <Grid item sm container justifyContent="flex-end">
                    <Stack direction="row" alignItems="flex-end" spacing={1}>
                        <Typography variant="subtitle1" gutterBottom>
                            Sort by:
                        </Typography>
                        <FormControl size={'small'}>
                            <Select
                                value={order}
                                onChange={handleChange}
                                inputProps={{'aria-label': 'Without label'}}
                            >
                                <MenuItem value={'hl'}>Price High-Low</MenuItem>
                                <MenuItem value={"lh"}>Price Low-High</MenuItem>
                            </Select>
                        </FormControl>
                    </Stack>
                </Grid>
            </Grid>
        </Wrapper>
    );
};

export default Header;