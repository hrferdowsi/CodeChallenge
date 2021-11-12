import React from 'react';
import {
    Stack,
    ButtonBase,
    Grid,
    Typography,
    MenuItem,
    FormControl,
} from "@mui/material";
import Select, {SelectChangeEvent} from '@mui/material/Select';
import qantasLogo from "../../images/qantasLogo.png";
import {Wrapper, Img, logoSize, SPACING} from '../../styles/index';


interface HeaderProps {
    list: Accommodation[],
    order: SearchOrder,
    onOrderChange: (val: SearchOrder) => void;
}

const Header: React.FC<HeaderProps> = ({list, order, onOrderChange}) => {

    const handleChange = (event: SelectChangeEvent) => onOrderChange(event.target.value as SearchOrder);
    return (
        <Wrapper>
            <Grid container direction="row" spacing={SPACING}>
                <Grid item>
                    <Stack>
                        <ButtonBase sx={logoSize}>
                            <Img alt={qantasLogo} src={qantasLogo} loading={"lazy"}/>
                        </ButtonBase>
                        <Typography variant="subtitle1" gutterBottom>
                            {list.length} hotels in Sydney
                        </Typography>
                    </Stack>
                </Grid>
                <Grid item sm container justifyContent="flex-end">
                    <Stack direction="row" alignItems="flex-end" spacing={SPACING}>
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