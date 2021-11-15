import React, {useEffect, useState} from 'react';
import {get, toNumber} from "lodash";

import apiResponse from './mockData/data.json';
import Card from './components/Card/Card';
import Header from "./components/Header/Header";
import {Paper, Stack, CssBaseline,} from '@mui/material';

import {Wrapper} from './styles/styled';
import './App.css';


export const sorter = (order: SearchOrder) => {
    return (hotel1: Accommodation, hotel2: Accommodation) => {
        const val1 = toNumber(get(hotel1, 'offer.displayPrice.amount')) || 0;
        const val2 = toNumber(get(hotel2, 'offer.displayPrice.amount')) || 0;
        if (order === "hl") return val2 - val1;
        return val1 - val2;
    }
}


function App() {
    const [order, setOrder] = useState<SearchOrder>("lh");
    const [list, setList] = useState<Accommodation[]>([]);

    useEffect(() => {
        const sortedData = [...apiResponse.results as Accommodation[]].sort(sorter(order))
        setList(sortedData as Accommodation[]);
    }, [order])


    return (
        <div className="App">
            <Paper sx={{width: 800, maxWidth: '100%', padding: "10px"}}>
                <CssBaseline/>
                <Header totalResults={list.length} order={order} onOrderChange={setOrder}/>
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


