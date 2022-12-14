import { Flex, Input, Text } from '@thaihuuluong/dogwatcher-uikit';
import React from 'react';
import styled from 'styled-components';

interface Props {
    parentCallback?: (newValue, index) => void
    index?: number,
    value?: string
}

const InputSlack: React.FC<Props> = ({ parentCallback, value, index }) => {

    return (
        <Flex width='100%' flexDirection='column'>
            <Text>Slack</Text>
            <CustomInput placeholder='Please input your slack' value={value} onChange={(e) => parentCallback(e.target.value, index)}/>
        </Flex>
    );
};

export default InputSlack;

const CustomInput = styled(Input)`
    height: 50px;
    background-color: transparent;
`