import React, {useEffect, useState} from 'react';
import * as data from '../src/utils/data.json';
import * as _ from 'lodash'

import './App.css';
import {
    Paper,
    Stack,
    Container,
    CssBaseline,
    styled,
} from '@mui/material';

import Card from './components/Card';
import Layout from "./components/Layout";

const Item = styled(Paper)(({theme}) => ({
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
}));

const sorter = (order: string) => {
    return (a: number, b: number) => {
        const val1 = _.get(a, 'offer.displayPrice.amount');
        const val2 = _.get(b, 'offer.displayPrice.amount');
        if (order === "hl") return val1 > val2 ? 1 : a < b ? -1 : 0;
        return val2 > val1 ? 1 : a < b ? -1 : 0;
    }
}


function App() {
    const [order, setOrder] = useState<searchOrder>("lh");
    const [list, setList] = useState<Accommodation[]>([])

    useEffect(() => {
        const sortedData = data.results.sort(sorter(order) as any)
        setList(sortedData as Accommodation[]);
    }, [order])


    return (
        <div className="App-header">
            <Paper sx={{width: 800, maxWidth: '100%'}}>
                <CssBaseline/>
                <Layout list={list} order={order} setOrder={setOrder}/>
                <Container>
                    <Stack>
                        {list?.map((hotel: Accommodation) => (
                                <Item key={hotel.id} sx={{boxShadow: 0}}>
                                    <Card data={hotel}/>
                                </Item>
                            )
                        )}
                    </Stack>
                </Container>
            </Paper>
        </div>
    );
}

export default App;


