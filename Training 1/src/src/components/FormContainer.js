import React, { Component } from 'react';
import { Form, Input, DatePicker, Select, Button  } from 'antd';
import moment from 'moment';

class FormContainer extends Component {
    render() {
        const { MonthPicker, RangePicker } = DatePicker;
        const { Option } = Select;
        const dateFormat = 'MM/DD/YYYY';

        return (
            <div className="FormContainer">
                <Form layout="inline">
                    <Form.Item>
                        <Input placeholder="Anywhere" />
                    </Form.Item>
                    <Form.Item>
                        <RangePicker
                            format={dateFormat}
                        />
                    </Form.Item>
                    <Form.Item>
                        <Select defaultValue="adults" style={{ width: 120 }}>
                            <Option value="adults">Adults</Option>
                            <Option value="children">Children</Option>
                            <Option value="infants">Infants</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item>
                        <Button type="danger">Search</Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }
}

export default FormContainer;
