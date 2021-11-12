import React from 'react';
import {Box, Link, Stack, ButtonBase, Grid, Rating, Typography} from "@mui/material";
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CircleSharpIcon from '@mui/icons-material/CircleSharp';
import {Img, cardImageSize, ImgRibbonStyle, SPACING, SPACING_TWO} from '../../styles';


interface CardsProps {
    data: Accommodation;
}

const Card: React.FC<CardsProps> = ({data}) => {

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
                data-testid="rating"
            /> :
            <Rating
                name="read-only"
                value={data.property.rating.ratingValue}
                precision={0.5}
                readOnly
                size={"small"}
                data-testid="rating"
            />
    )

    return (
        <Grid container spacing={SPACING}>
            <Grid item>
                <ButtonBase href="#" sx={cardImageSize} data-testid="hotel_picture">
                    <Img alt={data.property.previewImage.caption} src={previewURL} loading={"lazy"}/>
                    <Box sx={ImgRibbonStyle}>
                        {data.offer.promotion.title}
                    </Box>
                </ButtonBase>
            </Grid>
            <Grid item xs={11} sm container>
                <Grid item xs container direction="column" spacing={SPACING_TWO}>
                    <Grid item xs data-testid="property_title">
                        <Typography gutterBottom variant="body1" component="div">
                            <Link href="#" underline="none"
                                  color="inherit"><b>{data.property.title}</b>
                            </Link> {AccRates}
                        </Typography>
                        <Typography variant="subtitle2" gutterBottom data-testid="property_address">
                            {data.property.address.join(", ")}
                        </Typography>
                        <Typography variant="body2" sx={{color: "red"}} gutterBottom data-testid="offer_name">
                            <u>{data.offer.name}</u>
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant="body2" sx={{color: "green"}} gutterBottom data-testid="cancellation">
                            {data.offer.cancellationOption.cancellationType === "FREE_CANCELLATION" && "Free cancellation"}
                        </Typography>
                    </Grid>
                </Grid>
                <Grid item>
                    <Stack alignItems="flex-end">
                        <Typography variant="subtitle1">
                            1 night total (AUD)
                        </Typography>
                        <Typography variant="h5" data-testid="price">
                            ${data.offer.displayPrice.amount}
                        </Typography>
                        {data.offer.savings && (
                            <Typography
                                variant="subtitle1"
                                sx={{color: "red"}}
                                data-testid="offer_saving"
                            >
                                Save ${data.offer.savings.amount}~
                            </Typography>
                        )}
                    </Stack>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default Card;