import { uniqueId } from 'lodash';
import { Col, Row } from 'react-grid-system';
import { GridLayoutProps } from './GridLayout.d';

function convertListItems2Grid(items: JSX.Element[], props: GridLayoutProps) {
    let k = 0;

    let _rows = [];
    let _cols = [];

    const { columnCount = 2, align, direction, gutterWidth, justify, style, wrap } = props;

    while (k <= items.length) {
        for (let i = 0; i < columnCount; i++) {
            if (i <= items.length) {
                _cols.push(items[k + i]?.props);
            } else {
                break;
            }
        }

        _rows.push(
            <Row
                key={k}
                className="py-[0.1rem]"
                align={align}
                direction={direction}
                gutterWidth={gutterWidth}
                justify={justify}
                style={style}
                wrap='nowrap'
            >
                {_cols.map((col) => {
                    return (
                        <Col {...col} key={uniqueId(`__fd-${k}-`)} />
                    )
                })}
            </Row>
        );
        k += columnCount;
        _cols = [];
    }

    return _rows;
}

export { convertListItems2Grid };

