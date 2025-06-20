import React, { useState } from 'react';
import Paper from '@mui/material/Paper';
import { DataTypeProvider } from '@devexpress/dx-react-grid';
import {
    Grid,
    Table,
    TableBandHeader,
    TableHeaderRow,
} from '@devexpress/dx-react-grid-material-ui';
import { countries } from '../demo-data/countries';

const BasicSetup = () => {
    const PercentFormatter = ({ value }) => (
        <span>
            {value}
            %
        </span>
    );

    const PercentTypeProvider = props => (
        <DataTypeProvider
            formatterComponent={PercentFormatter}
            {...props}
        />
    );
    const [columns] = useState([
        { name: 'Country', title: 'Country' },
        { name: 'Area', title: 'Area, sq. km.' },
        { name: 'Population_Total', title: 'Total' },
        { name: 'Population_Urban', title: 'Urban' },
        { name: 'GDP_Total', title: 'Total, min $' },
        { name: 'GDP_Industry', title: 'Industry' },
        { name: 'GDP_Services', title: 'Services' },
        { name: 'GDP_Agriculture', title: 'Agriculture' },
    ]);
    const [columnBands] = useState([
        {
            title: 'Population',
            children: [
                { columnName: 'Population_Total' },
                { columnName: 'Population_Urban' },
            ],
        },
        {
            title: 'Nominal GDP',
            children: [
                { columnName: 'GDP_Total' },
                {
                    title: 'By Sector',
                    children: [
                        { columnName: 'GDP_Agriculture' },
                        { columnName: 'GDP_Industry' },
                        { columnName: 'GDP_Services' },
                    ],
                },
            ],
        },
    ]);

    const [tableColumnExtensions] = useState([
        { columnName: 'Area', width: 125, align: 'right' },
        { columnName: 'Population_Total', width: 110, align: 'right' },
        { columnName: 'Population_Urban', width: 75, align: 'right' },
        { columnName: 'GDP_Total', width: 115, align: 'right' },
        { columnName: 'GDP_Industry', width: 90, align: 'right' },
        { columnName: 'GDP_Services', width: 90, align: 'right' },
        { columnName: 'GDP_Agriculture', width: 110, align: 'right' },
    ]);

    const [percentColumns] = useState([
        'GDP_Industry',
        'GDP_Services',
        'GDP_Agriculture',
        'Population_Urban',
    ]);

    return (
        <>
            <h4>Basic Setup</h4>
            <Paper>
                <Grid
                    rows={countries}
                    columns={columns}
                >
                    <PercentTypeProvider
                        for={percentColumns}
                    />
                    <Table
                        columnExtensions={tableColumnExtensions}
                    />
                    <TableHeaderRow />
                    <TableBandHeader
                        columnBands={columnBands}
                    />
                </Grid>
            </Paper>
        </>
    );
};

export const BandedColumns = () => {

    return (
        <>
            <BasicSetup />
        </>
    );
};
