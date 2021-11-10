import React from 'react';
import {Box, ButtonBase, Grid, styled, Rating, Typography} from "@mui/material";
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CircleSharpIcon from '@mui/icons-material/CircleSharp';


const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

interface cardsProps {
    data: Accommodation;
}

const Card = ({data}: cardsProps): JSX.Element => {

    const previewURL = data.property.previewImage.url ?? "//:0";

    const AccRates: JSX.Element = (
        data.property.rating.ratingType === "self" ?
            <Rating
                name="read-only"
                value={data.property.rating.ratingValue}
                precision={0.5}
                icon={<CircleSharpIcon fontSize="inherit"/>}
                emptyIcon={<CircleOutlinedIcon fontSize="inherit"/>}
                readOnly
                size={"small"}
            /> :
            <Rating
                name="read-only"
                value={data.property.rating.ratingValue}
                precision={0.5}
                readOnly
                size={"small"}
            />
    )

    return (
        <Grid container spacing={1}>
            <Grid item>
                <ButtonBase sx={{width: 145, height: 125}}>
                    <Img alt={data.property.previewImage.caption} src={previewURL} loading={"lazy"}/>
                    <Box
                        sx={{
                            fontSize: 12,
                            bgcolor: 'white',
                            color: 'red',
                            p: 0.5,
                            position: 'absolute',
                            top: 20,
                            left: 0,
                            zIndex: 'tooltip',
                        }}
                    >
                        {data.offer.promotion.title}
                    </Box>
                </ButtonBase>
            </Grid>
            <Grid item xs={11} sm container>
                <Grid item xs container direction="column" spacing={2}>
                    <Grid item xs>
                        <Typography gutterBottom variant="body1" component="div">
                            <b>{data.property.title}</b> {AccRates}
                        </Typography>
                        <Typography variant="subtitle1" gutterBottom>
                            {data.property.address.join("")}
                        </Typography>
                        <Typography variant="body2" sx={{color: "red"}} gutterBottom>
                            <u>{data.offer.name}</u>
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body2" sx={{color: "green"}} gutterBottom>
                            {data.offer.cancellationOption.cancellationType === "FREE_CANCELLATION" && "Free cancellation"}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item>
                    <Typography variant="subtitle1" component="div">
                        1 night total (AUD)
                    </Typography>
                    <Typography variant="subtitle1" component="div">
                        ${data.offer.displayPrice.amount}
                    </Typography>
                    {data.offer.savings && (
                        <Typography variant="subtitle1" component="div">
                            Save ${data.offer.savings.amount}~
                        </Typography>
                    )}
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Card;