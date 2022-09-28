import { Button, Flex, Input, Text } from '@phamphu19498/runtogether-uikit';
import axios from 'axios';
import { DeleteIcon } from 'components/Pancake-uikit';
import { PlusIcon } from 'components/Pancake-uikit/widgets/Menu/icons';
import { BASE_URL_DATA_ADMIN_CREATE } from 'config';
import { GetListAdminByID } from 'views/AdminTable/hook/fetchDataByID';
import Select from 'react-select'
import { useParams } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import InputEmail from './InputEmail';
import NameWallet from './InputNameWallet';
import InputProject from './InputProject';
import InputSlack from './InputSlack';
import InputToken from './InputToken';
import WalletAddress from './InputWalletAddress';


const optionStatus = [
    {
        label: 'True',
        value: true,
    },
    {
        label: 'False',
        value: false,
    }
]

interface Props {
    idProject?: string
}

const Update: React.FC<Props> = () => {

    const { idProject }: { idProject: string } = useParams()
    const { listDataAdminByID } = GetListAdminByID(idProject)
    console.log('listDataAdminByID', listDataAdminByID[0]);

    const [nameWallet, setNameWallet] = useState('')
    const [walletAddress, setWalletAddress] = useState('')
    const [projectName, setProjectName] = useState('')
    const [tokenLimit, setTokenLimit] = useState([{}])
    const [emails, setEmails] = useState([''])
    const [slacks, setSlacks] = useState([''])
    const [status, setStatus] = useState(true)

    // useEffect(() => {
    //     setEmails(listDataAdminByID[0]);
    // },[listDataAdminByID])
    console.log('emails',emails);


    const callbackNameWallet = (childData) => {
        setNameWallet(childData)
    }
    const callbackWalletAddress = (childData) => {
        setWalletAddress(childData)
    }
    const callbackProjectName = (childData) => {
        setProjectName(childData)
    }
    const callbackTokenLimit = (childData, index) => {
        const newArrLimit = [...tokenLimit];
        newArrLimit[index] = childData;
        setTokenLimit(newArrLimit);
    }
    const callbackEmail = (childData, index) => {
        const newArrEmail = [...emails];
        newArrEmail[index] = childData;
        setEmails(newArrEmail);
    }
    const callbackSlack = (childData, index) => {
        const newArrSlack = [...slacks];
        newArrSlack[index] = childData;
        setSlacks(newArrSlack);
    }

    const handleAddLimit = () => {
        const newTokenLimit = { "tokenAddress": "", "tokenName": "", "tokenLimit": 0 };
        const newArrLimit = [...tokenLimit, newTokenLimit];
        setTokenLimit(newArrLimit);
    };
    const handleDeleteClick = (id: any) => {
        tokenLimit.splice(id, 1);
    };

 
    const handleAddEmail = () => {
        const newEmail = ""
        const newArrEmail = [...emails, newEmail];
        setEmails(newArrEmail);
    };
    const handleDeleteEmail = (id: any) => {
        emails.splice(id, 1);
    };
    const handleAddSlack = () => {
        const newSlack = "Slack"
        const newArrSlack = [...emails, newSlack];
        setSlacks(newArrSlack);
    };
    const handleDeleteSlack = (id: any) => {
        slacks.splice(id, 1);
    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const idAdmin = projectName + walletAddress
            const resp = await axios.post(BASE_URL_DATA_ADMIN_CREATE,
                {
                    "id": idAdmin.toString(),
                    "walletName": nameWallet,
                    "walletAddress": walletAddress,
                    "status": status,
                    "limit": tokenLimit,
                    "email": emails,
                    "project": projectName,
                    "slack": slacks
                })
            console.log(resp);

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Container>
            {listDataAdminByID.length !== 0 ?
                <Flex flexDirection='column'>
                    <Flex width='100%' mt={3} mb={3} justifyContent='center' alignItems='center'>
                        <Text fontSize='26px'>Create Admin</Text>
                    </Flex>
                    <FlexInput>
                        <NameWallet
                            value={listDataAdminByID[0].walletName}
                            parentCallback={callbackNameWallet} />
                        <WalletAddress
                            value={listDataAdminByID[0].walletAddress}
                            parentCallback={callbackWalletAddress} />
                    </FlexInput>
                    <FlexInput>
                        <InputProject
                        value={listDataAdminByID[0].project}
                        parentCallback={callbackProjectName}/>
                        <Flex width='40%' flexDirection='column'>
                            <Text>ID Project</Text>
                            <CustomInput disabled value={listDataAdminByID[0].project+listDataAdminByID[0].walletAddress}/>
                        </Flex>
                    </FlexInput>
                    <FlexInputToken>
                        <Flex height='100%' width='40%' flexDirection='column' style={{ gap: '5px' }}  >
                            <Flex alignItems='center'>
                                <Text bold color='#FF592C'>Thêm Token</Text>
                                <PlusIcon onClick={handleAddLimit} style={{ cursor: 'pointer' }} />
                            </Flex>
                            {
                                listDataAdminByID[0].limit.map((item, index) => (
                                    <Flex height='100%' style={{ gap: '5px' }}>
                                        <InputToken
                                            index={index}
                                            valueToken={item}
                                            parentCallback={callbackTokenLimit} />
                                        <Flex justifyContent='center' alignItems='center' style={{ gap: "10px" }}>
                                            <DeleteIcon onClick={() => handleDeleteClick(index)} style={{ cursor: 'pointer' }} />
                                        </Flex>
                                    </Flex>
                                ))}
                        </Flex>
                        <Flex height='100%' width='40%' flexDirection='column' style={{ gap: '5px' }}>
                            <Flex alignItems='center'>
                                <Text bold color='#FF592C'>Thêm Email</Text>
                                <PlusIcon onClick={handleAddEmail} style={{ cursor: 'pointer' }} />
                            </Flex>
                            {
                                listDataAdminByID[0].email.map((item, index) => (
                                    <Flex style={{ gap: '5px' }}>
                                        <InputEmail
                                            index={index}
                                            value={item}
                                            parentCallback={callbackEmail} />
                                        <Flex justifyContent='center' alignItems='center' style={{ gap: "10px" }}>
                                            <DeleteIcon onClick={() => handleDeleteEmail(index)} style={{ cursor: 'pointer' }} />
                                        </Flex>
                                    </Flex>
                                ))}
                        </Flex>
                    </FlexInputToken>
                    <FlexInputToken>
                        <Flex height='100%' width='40%' flexDirection='column' style={{ gap: '5px' }}  >
                            <Flex alignItems='center'>
                                <Text bold color='#FF592C'>Status</Text>
                            </Flex>
                            <Flex>
                                <Select
                                    options={optionStatus}
                                    defaultValue={{
                                        label: 'True',
                                        value: true,
                                    }}
                                    onChange={(e) => setStatus(e.value)}
                                />
                            </Flex>
                        </Flex>
                        <Flex height='100%' width='40%' flexDirection='column' style={{ gap: '5px' }}>
                            <Flex alignItems='center'>
                                <Text bold color='#FF592C'>Thêm Slack</Text>
                                <PlusIcon onClick={handleAddSlack} style={{ cursor: 'pointer' }} />
                            </Flex>
                            {
                                listDataAdminByID[0].slack.map((item, index) => (
                                    <Flex style={{ gap: '5px' }}>
                                        <InputSlack
                                            index={index}
                                            value={item}
                                            parentCallback={callbackSlack} />
                                        <Flex justifyContent='center' alignItems='center' style={{ gap: "10px" }}>
                                            <DeleteIcon onClick={() => handleDeleteSlack(index)} style={{ cursor: 'pointer' }} />
                                        </Flex>
                                    </Flex>
                                ))}
                        </Flex>
                    </FlexInputToken>
                    <FlexInput>
                        <Flex width='100%' justifyContent='center'>
                            <Flex style={{ gap: '20px' }}>
                                <Button onClick={handleSubmit}>Submit</Button>
                                <Button>Back</Button>
                            </Flex>
                        </Flex>
                    </FlexInput>
                </Flex>
                :
                <></>
            }
        </Container>
    );
};

export default Update;

const Container = styled.div`
    width: 100%;
    height: auto;
    padding: 10px 100px 10px 100px;
`
const FlexInput = styled(Flex)`
    width: 100%;
    height: 100px;
    justify-content: space-around;
    align-items: center;
`
const CustomInput = styled(Input)`
    height: 50px;
`
const FlexInputToken = styled(Flex)`
    width: 100%;
    height: auto;
    justify-content: space-around;
    align-items: center;
`