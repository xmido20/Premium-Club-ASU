import React from 'react'
import { TreeNode, Tree } from 'react-organizational-chart'
import styled from 'styled-components'
import { mobile } from '../../responsive'

const HeadDiv = styled.div`    
    width: 80px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: auto;
    margin-right: auto;
    ${mobile({
        width: '60px',
    })}
`
const HeadPic = styled.img`
    border: solid white 3px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 12px;
    ${mobile({
        marginBottom:'10px'
    })}
`
const CommitteeName = styled.h3`
    color: white;
    font-weight: bold;
    font-size: 19px;
    width: max-content;
    margin-bottom: 0;
    ${mobile({
        fontSize:'15px'
    })}
`
const HeadName = styled.h4`
    color: white;
    font-weight: bold;
    font-size: 17px;
    width: max-content;
    margin-bottom: 0;
    ${mobile({
        fontSize:'12px'
    })}
`
const HeadPosition = styled.h5`
    color: lightgray;
    font-weight: 500;
    font-size: 12px;
    width: max-content;
    ${mobile({
        fontSize:'10px'
    })}
`


const ViceHeadDiv = styled.div`    
    width: 70px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: 50px;
    margin-right: 50px;
    ${mobile({
        width: '60px',
        marginLeft:'30px',
        marginRight:'30px',
    })}
    `
const ViceHeadPic = styled.img`
    border: solid white 3px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 12px;
    ${mobile({
        marginBottom:'10px'
    })}
`
const ViceHeadName = styled.h4`
    color: white;
    font-weight: bold;
    font-size: 17px;
    width: max-content;
    margin-bottom: 0;
    ${mobile({
        fontSize:'12px'
    })}
`
const ViceHeadPosition = styled.h5`
    color: lightgray;
    font-weight: 500;
    font-size: 12px;
    width: max-content;
    ${mobile({
        fontSize:'10px'
    })}
`

const BoardCrew = ({images}) => {
  return (
    <div style={{overflowX:'scroll',height:'fit-content'}}>
        <Tree 
            lineWidth={'4px'}
            lineColor={'white'}
            lineHeight={'30px'}
        >

            {/* MEDIA */}
            <TreeNode label={
                <HeadDiv>
                    <CommitteeName>Media</CommitteeName>
                    <HeadPic src={images['abdelrahman-gamal-HeadMd.jpg']} className="img-fluid" />
                    <HeadName>
                        Abdelrahman Gamal
                    </HeadName>
                    <HeadPosition>
                        Head
                    </HeadPosition>
                </HeadDiv>
            } >
                <TreeNode label={
                    <ViceHeadDiv>
                        <ViceHeadPic src={images['enjy-khaled-ViceMd.jpg']} className="img-fluid" />
                        <ViceHeadName>
                            Enjy Khaled
                        </ViceHeadName>
                        <ViceHeadPosition>
                            Vice Head
                        </ViceHeadPosition>
                    </ViceHeadDiv>
                } />
                <TreeNode label={
                    <ViceHeadDiv>
                        <ViceHeadPic src={images['salma-hossam-ViceMd.jpg']} className="img-fluid" />
                        <ViceHeadName>
                            Salma Hossam
                        </ViceHeadName>
                        <ViceHeadPosition>
                            Vice Head
                        </ViceHeadPosition>
                    </ViceHeadDiv>
                } />
            </TreeNode>


                {/* MARKETING */}
            <TreeNode label={
                <HeadDiv>
                    <CommitteeName>Marketing</CommitteeName>
                    <HeadPic src={images['mariam-eid-HeadMarketing.jpg']} className="img-fluid" />
                    <HeadName>
                        Mariam Eid
                    </HeadName>
                    <HeadPosition>
                        Head
                    </HeadPosition>
                </HeadDiv>
            }>
                <TreeNode label={
                    <ViceHeadDiv>
                        <ViceHeadPic src={images['hagar-gamal-ViceMarketing.jpg']} className="img-fluid" />
                        <ViceHeadName>
                            Hagar Gamal
                        </ViceHeadName>
                        <ViceHeadPosition>
                            Vice Head
                        </ViceHeadPosition>
                    </ViceHeadDiv>
                } />
                <TreeNode label={
                    <ViceHeadDiv>
                        <ViceHeadPic src={images['hagar-emad-ViceMarketing2.jpg']} className="img-fluid" />
                        <ViceHeadName>
                            Hagar Emad
                        </ViceHeadName>
                        <ViceHeadPosition>
                            Vice Head
                        </ViceHeadPosition>
                    </ViceHeadDiv>
                } />
            </TreeNode>


            {/* EVENTS */}
            <TreeNode label={
                <HeadDiv>
                    <CommitteeName>Events</CommitteeName>
                    <HeadPic src={images['gehan-HeadEv.jpg']} className="img-fluid" />
                    <HeadName>
                        Gehan Salah
                    </HeadName>
                    <HeadPosition>
                        Head
                    </HeadPosition>
                </HeadDiv>
            }>
                <TreeNode label={
                    <ViceHeadDiv>
                        <ViceHeadPic src={images['mariam-hassan-ViceEv.jpg']} className="img-fluid" />
                        <ViceHeadName>
                            Mariam Hassan
                        </ViceHeadName>
                        <ViceHeadPosition>
                            Vice Head
                        </ViceHeadPosition>
                    </ViceHeadDiv>
                } />
                <TreeNode label={
                    <ViceHeadDiv>
                        <ViceHeadPic src={images['shimaa-elkashif-ViceEv.jpg']} className="img-fluid" />
                        <ViceHeadName>
                            Shimaa Elkashif
                        </ViceHeadName>
                        <ViceHeadPosition>
                            Vice Head
                        </ViceHeadPosition>
                    </ViceHeadDiv>
                } />
            </TreeNode>


                {/* LOGISTICS */}
            <TreeNode label={
                <HeadDiv>
                    <CommitteeName>Logistics</CommitteeName>
                    <HeadPic src={images['amira-deabes-HeadLog.jpg']} className="img-fluid" />
                    <HeadName>
                        Amirah Deabes
                    </HeadName>
                    <HeadPosition>
                        Head
                    </HeadPosition>
                </HeadDiv>
            } >
                <TreeNode label={
                    <ViceHeadDiv>
                        <ViceHeadPic src={images['noreen-emad-ViceLog.jpg']} className="img-fluid" />
                        <ViceHeadName>
                            Noureen Emad
                        </ViceHeadName>
                        <ViceHeadPosition>
                            Vice Head
                        </ViceHeadPosition>
                    </ViceHeadDiv>
                } />
                <TreeNode label={
                    <ViceHeadDiv>
                        <ViceHeadPic src={images['nour-adel-ViceLog.jpg']} className="img-fluid" />
                        <ViceHeadName>
                            Nour Adel
                        </ViceHeadName>
                        <ViceHeadPosition>
                            Vice Head
                        </ViceHeadPosition>
                    </ViceHeadDiv>
                } />
            </TreeNode>


            {/* HR */}
            <TreeNode label={
                <HeadDiv>
                    <CommitteeName>Human resources</CommitteeName>
                    <HeadPic src={images['rawan-karm-HeadHR.jpg']} className="img-fluid" />
                    <HeadName>
                        Rawam Karm
                    </HeadName>
                    <HeadPosition>
                        Head
                    </HeadPosition>
                </HeadDiv>
            }>
                <TreeNode label={
                    <ViceHeadDiv>
                        <ViceHeadPic src={images['ahmed-essam-ViceHr.jpg']} className="img-fluid" />
                        <ViceHeadName>
                            Ahmed Essam
                        </ViceHeadName>
                        <ViceHeadPosition>
                            Vice Head
                        </ViceHeadPosition>
                    </ViceHeadDiv>
                } />
                <TreeNode label={
                    <ViceHeadDiv>
                        <ViceHeadPic src={images['manar-mahmoud-ViceHr.jpg']} className="img-fluid" />
                        <ViceHeadName>
                            Manar Mahmoud
                        </ViceHeadName>
                        <ViceHeadPosition>
                            Vice Head
                        </ViceHeadPosition>
                    </ViceHeadDiv>
                } />
            </TreeNode>


            {/* PR */}
            <TreeNode label={
                <HeadDiv>
                    <CommitteeName>Public Relations</CommitteeName>
                    <HeadPic src={images['nehad-gehad-HeadPr.jpg']} className="img-fluid" />
                    <HeadName>
                        Nehad Gehad
                    </HeadName>
                    <HeadPosition>
                        Head
                    </HeadPosition>
                </HeadDiv>
            }>
                <TreeNode label={
                    <ViceHeadDiv>
                        <ViceHeadPic src={images['basmalla-elshiekh-VicePr.jpg']} className="img-fluid" />
                        <ViceHeadName>
                            Basmalla Alsheikh
                        </ViceHeadName>
                        <ViceHeadPosition>
                            Vice Head
                        </ViceHeadPosition>
                    </ViceHeadDiv>
                } />
                <TreeNode label={
                    <ViceHeadDiv>
                        <ViceHeadPic src={images['aya-hamdy-VicePr.jpg']} className="img-fluid" />
                        <ViceHeadName>
                            Aya hamdy
                        </ViceHeadName>
                        <ViceHeadPosition>
                            Vice Head
                        </ViceHeadPosition>
                    </ViceHeadDiv>
                } />
            </TreeNode>



            {/* ACADEMIC */}
            <TreeNode label={
                <HeadDiv>
                    <CommitteeName>Academic</CommitteeName>
                    <HeadPic src={images['rania-ibrahim-HeadAc.jpg']} className="img-fluid" />
                    <HeadName>
                        Rania Ibrahim
                    </HeadName>
                    <HeadPosition>
                        Head
                    </HeadPosition>
                </HeadDiv>
            }>
                <TreeNode label={
                    <ViceHeadDiv>
                        <ViceHeadPic src={images['adham-khalifa-ViceAc.jpg']} className="img-fluid" />
                        <ViceHeadName>
                            Adham Khalifa
                        </ViceHeadName>
                        <ViceHeadPosition>
                            Vice Head
                        </ViceHeadPosition>
                    </ViceHeadDiv>
                } />
                <TreeNode label={
                    <ViceHeadDiv>
                        <ViceHeadPic src={images['mariam-abdallah-ViceAc.jpg']} className="img-fluid" />
                        <ViceHeadName>
                            Mariam Ahmed
                        </ViceHeadName>
                        <ViceHeadPosition>
                            Vice Head
                        </ViceHeadPosition>
                    </ViceHeadDiv>
                } />
            </TreeNode>
        </Tree>
    </div>
  )
}

export default BoardCrew
