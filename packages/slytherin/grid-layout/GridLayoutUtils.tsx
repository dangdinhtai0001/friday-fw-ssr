import { getAllChildrenByType } from '@packages/ravenclaw/ComponentUtils';
import { Col, Row } from 'react-grid-system';
import GridItem from './GridItem';

function findAllGridItemProps(children: JSX.Element | JSX.Element[] | null) {
    return getAllChildrenByType(children, GridItem, (child) => {
        return child.props;
    });
}

function convertListItems2Grid(items: JSX.Element[], columnCount: number = 2) {
    let k = 0;

    let _rows = [];
    let _cols = [];

    while (k <= items.length) {
        for (let i = 0; i < columnCount; i++) {
            if (i <= items.length) {
                _cols.push(items[k + i]);
            } else {
                break;
            }
        }

        _rows.push(_cols);
        k += columnCount;
        _cols = [];
    }

    return _rows;
}

function convert1dArrTo2dArr(_arr: any[], col: number) {
    const _result = [];
    while (_arr.length) {
        _result.push(_arr.splice(0, col))
    };
    return _result;
}

function convertItemtable2Grid(table: any[][]) {
    return table.map((row, rIndex) => {
        return (
            <Row key={rIndex} className="py-[0.1rem]">
                {row.map((col, cIndex) => {
                    return (
                        <Col {...col} key={`${rIndex}-${cIndex}`} />
                    )
                })}
            </Row>
        )
    })
}

export { findAllGridItemProps, convertListItems2Grid, convert1dArrTo2dArr, convertItemtable2Grid };

