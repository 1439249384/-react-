/**
 * Created by hao.cheng on 2017/5/3.
 */
import React from 'react';
import { Row, Col, Card, Timeline, Icon } from 'antd';
import BreadcrumbCustom from '../BreadcrumbCustom';
import b1 from '../../style/imgs/b1.jpg';


class Dashboard extends React.Component {
    render() {
        return (
            <div className="gutter-example button-demo">
                <BreadcrumbCustom />
                <Row gutter={10}>
                    <Col className="gutter-row" md={4}>
                    </Col>
                    <Col className="gutter-row" md={4}>
                        
                    </Col>
                </Row>
                
            </div>
        )
    }
}

export default Dashboard;