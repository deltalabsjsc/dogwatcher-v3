import { Button, Flex, Input, Text, useModal } from '@thaihuuluong/dogwatcher-uikit';
import axios from 'axios';
import { DeleteIcon } from 'components/Pancake-uikit';
import { PlusIcon } from 'components/Pancake-uikit/widgets/Menu/icons';
import {BASE_URL_DATA_ADMIN_CRUD } from 'config';
import Select from 'components/Select/SelectV2';
import history from 'routerHistory';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import InputEmail from './InputEmail';
import NameWallet from './InputNameWallet';
import InputProject from './InputProject';
import InputSlack from './InputSlack';
import InputToken from './InputToken';
import WalletAddress from './InputWalletAddress';
import SubmitModal from './SubmitModal';

const optionStatus = [
    {
        label: 'Enabled',
        value: true,
    },
    {
        label: 'Disabled',
        value: false,
    }
]

const Create = () => {

    const tokenAuth = localStorage.getItem("tokenAuth")
    const [nameWallet, setNameWallet] = useState('')
    const [walletAddress, setWalletAddress] = useState('')
    const [projectName, setProjectName] = useState('ProjectDeltaLabs')
    const [tokenLimit, setTokenLimit] = useState([{"tokenAddress" : "0xc643E83587818202E0fFf5eD96D10Abbc8Bb48e7", "tokenName" : "RUN", "tokenLimit" : 0}])
    const [emails, setEmails] = useState([{"address" : "", "time" : ""}])
    const [slacks, setSlacks] = useState([''])
    const [status, setStatus] = useState(true)
    const [ramdomID, setRamdomID] = useState('')
    useEffect(()=>{
        const idRamdom = Math.random().toString(36).slice(2)
        setRamdomID(idRamdom)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    
    function handleCancel() {
        history.push(`/`)
    }
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
        const newTokenLimit = {"tokenAddress" :"0xc643E83587818202E0fFf5eD96D10Abbc8Bb48e7" ,"tokenName": "RUN", "tokenLimit" : 0};
        const newArrLimit = [...tokenLimit, newTokenLimit];
        setTokenLimit(newArrLimit);
    };
    const handleDeleteClick = (id: any) => {
        const newArrLimit = [...tokenLimit];
        newArrLimit.splice(id, 1);
        setTokenLimit(newArrLimit);
    };
    const handleAddEmail = () => {
        const newEmail = {"address" :"" ,"time": ""};
        const newArrEmail = [...emails, newEmail];
        setEmails(newArrEmail);
    };
    const handleDeleteEmail = (id: any) => {
        const newArrEmail = [...emails];
        newArrEmail.splice(id, 1);
        setEmails(newArrEmail);
    };
    const handleAddSlack = () => {
        const newSlack = ""
        const newArrSlack = [...slacks, newSlack];
        setSlacks(newArrSlack);
    };
    const handleDeleteSlack = (id: any) => {
        const newArrSlack = [...slacks];
        newArrSlack.splice(id, 1);
        setSlacks(newArrSlack);

    };

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await axios({
                method: 'POST',
                url: `${BASE_URL_DATA_ADMIN_CRUD}`,
                headers:{
                    'Authorization': `${tokenAuth}`
                },
                data: {
                    "id" : (projectName+ramdomID).split(" ").join(""),
                    "walletName": nameWallet,
                    "walletAddress": walletAddress,
                    "status": status,
                    "limit":tokenLimit,
                    "email":emails,
                    "project":projectName,
                    "slack":slacks
                }
            });
            history.push(`/`)
        } catch (error) {
          console.log(error)
        }
      }

      const [openSubmitModal] = useModal(<SubmitModal 
        id={(projectName+ramdomID).split(" ").join("")}
        walletName={nameWallet}
        walletAddress={walletAddress}
        status={status}
        limit={tokenLimit}
        email={emails}
        project={projectName}
        slack={slacks}
      />)

    return (
        <Container>
        <Flex flexDirection='column'>
            <Flex width='100%' mt={3} mb={3} justifyContent='center' alignItems='center'>
                <Text fontSize='26px' fontWeight='900'>CREATE</Text>
            </Flex>
            <FlexInput>
                <NameWallet 
                value={nameWallet}
                parentCallback={callbackNameWallet}/>
                <WalletAddress 
                value={walletAddress}
                parentCallback={callbackWalletAddress}/>
            </FlexInput>
            <FlexInput>
                <InputProject
                value={projectName}
                parentCallback={callbackProjectName}/>
                <Flex width='40%' flexDirection='column'>
                    <Text>Project ID</Text>
                    <CustomInput  disabled value={(projectName+ramdomID).split(" ").join("")}/>
                </Flex>
            </FlexInput>
           <FlexInputToken>
            <Flex height='100%' width='40%' flexDirection='column' style={{gap: '5px'}}  >
                <Flex alignItems='center'>
                    <Text>Add Token</Text>
                    <PlusIcon onClick={handleAddLimit} style={{cursor: 'pointer'}}/>
                </Flex>
            {
                tokenLimit.map((item, index) => (
                    <Flex height='100%' style={{gap: '5px'}}>
                        <InputToken
                        index={index}
                        parentCallback={callbackTokenLimit}/>
                        <Flex justifyContent='center' alignItems='center' style={{ gap: "10px" }} mt={4}>
                            <DeleteIcon onClick={() => handleDeleteClick(index)} style={{cursor: 'pointer'}}/>
                        </Flex>
                    </Flex>
            ))}
            </Flex>
            <Flex height='100%' width='40%' flexDirection='column' style={{gap: '5px'}}>
                <Flex alignItems='center'>
                    <Text>Add Email</Text>
                    <PlusIcon onClick={handleAddEmail} style={{cursor: 'pointer'}}/>
                </Flex>
            {
                emails.map((item, index) => (
                    <Flex style={{gap: '5px'}}>
                        <InputEmail
                        index={index}
                        parentCallback={callbackEmail}/>
                        <Flex justifyContent='center' alignItems='center' style={{ gap: "10px" }} mt={4}>
                            <DeleteIcon onClick={() => handleDeleteEmail(index)} style={{cursor: 'pointer'}}/>
                        </Flex>
                    </Flex>
            ))}
            </Flex>
           </FlexInputToken>
           <FlexInputToken>
            <Flex height='100%' width='40%' flexDirection='column' style={{gap: '5px'}}  >
                <Flex alignItems='center'>
                    <Text>Status</Text>
                </Flex>
                <Flex>
                <Select
                    options={optionStatus}
                    onChange={(e) => setStatus(e.value)}
                />
                </Flex>
            </Flex>
            <Flex height='100%' width='40%' flexDirection='column' style={{gap: '5px'}}>
                <Flex alignItems='center'>
                    <Text>Add Slack</Text>
                    <PlusIcon onClick={handleAddSlack} style={{cursor: 'pointer'}}/>
                </Flex>
            {
                slacks.map((item, index) => (
                    <Flex style={{gap: '5px'}}>
                        <InputSlack
                        index={index}
                        value={item}
                        parentCallback={callbackSlack}/>
                        <Flex justifyContent='center' alignItems='center' style={{ gap: "10px" }} mt={4}>
                            <DeleteIcon onClick={() => handleDeleteSlack(index)} style={{cursor: 'pointer'}}/>
                        </Flex>
                    </Flex>
            ))}
            </Flex>
           </FlexInputToken>
           <FlexInput>
                <Flex width='100%' justifyContent='center'>
                    <Flex style={{gap: '20px'}}>
                        {tokenLimit[0].tokenLimit === 0 ?
                            <Button onClick={openSubmitModal} disabled={nameWallet === '' || walletAddress === '' || projectName === '' || emails[0].address === '' || slacks.length === 0}>Submit</Button>
                        :
                            <Button onClick={handleSubmit} disabled={nameWallet === '' || walletAddress === '' || projectName === '' || emails[0].address === '' || slacks.length === 0}>Submit</Button>
                        }
                        <Button onClick={()=> handleCancel()}>Cancel</Button>
                    </Flex>
                </Flex>
           </FlexInput>
        </Flex>
    </Container>
    );
};

export default Create;

const Container = styled.div`
    width: 100%;
    height: auto;
    padding: 10px 100px 10px 100px;
    @media screen and (max-width: 768px){
        display: none;
    }
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