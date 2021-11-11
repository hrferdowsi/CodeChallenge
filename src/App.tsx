import React, {useEffect, useState} from 'react';
import * as data from '../src/utils/data.json';
import * as _ from 'lodash'
import Card from './components/Card';
import Header from "./components/Header";
import {Wrapper} from './components/common';

import './App.css';
import {
    Paper,
    Stack,
    CssBaseline,
} from '@mui/material';


const sorter = (order: string) => {
    return (a: number, b: number) => {
        const val1 = _.get(a, 'offer.displayPrice.amount');
        const val2 = _.get(b, 'offer.displayPrice.amount');
        const output = val2 - val1;
        if (order === "hl") return output;
        return -1 * output;
    }
}


function App() {
    const [order, setOrder] = useState<searchOrder>("lh");
    const [list, setList] = useState<Accommodation[]>([])

    useEffect(() => {
        const sortedData = [...data.results].sort(sorter(order) as any)
        setList(sortedData as Accommodation[]);
    }, [order])


    return (
        <div className="App">
            <Paper sx={{width: 800, maxWidth: '100%', padding: "10px"}}>
                <CssBaseline/>
                <Header list={list} order={order} setOrder={setOrder}/>
                <Stack>
                    {list?.map((hotel: Accommodation) => (
                            <Wrapper key={hotel.id}>
                                <Card key={hotel.id} data={hotel}/>
                            </Wrapper>
                        )
                    )}
                </Stack>
            </Paper>
        </div>
    );
}

export default App;


