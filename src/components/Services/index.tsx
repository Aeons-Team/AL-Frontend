import * as S from './style'
import { Card } from '@nextui-org/react';
import dataImage from '../../assets/ss.jpg'
import { Grid } from "@nextui-org/react";


export default function Services() {
    return (

        
        <S.Services id='services'>
                <S.Maintext>
                    <S.Span>Avabi Union</S.Span> services.  
                </S.Maintext>

                <Grid.Container gap={3} justify="center">
                        <Grid xs={12} sm={4}>
                            <Card>
                            <S.tImage >               
                                <img src={dataImage} />
                            </S.tImage>
                                <S.Maintext>
                                 <Card.Header css={{ position: "absolute", zIndex: 1, top: 5 }}>
                                 <S.Span>QA & testing
                            </S.Span> 
                                 </Card.Header>
                                </S.Maintext>
                            </Card>
                        </Grid>
                        <Grid xs={12} sm={4}>
                        <Card>
                            <S.tImage >               
                                <img src={dataImage} />
                            </S.tImage>
                        <S.Maintext>
                            <S.Span>QA & testing
                            </S.Span> 
                        </S.Maintext>
                        </Card>
                        </Grid>
                        <Grid xs={12} sm={4}>
                        <Card>
                            <S.tImage >               
                                <img src={dataImage} />
                            </S.tImage>
                        <S.Maintext>
                            <S.Span>QA & testing
                            </S.Span> 
                        </S.Maintext>
                        </Card>
                        </Grid>
                        <Grid xs={12} sm={4}>
                        <Card>
                            <S.tImage >               
                                <img src={dataImage} />
                            </S.tImage>
                        <S.Maintext>
                            <S.Span>Web development
                        </S.Span> 
                        </S.Maintext>
                        </Card>
                        </Grid>
                        <Grid xs={12} sm={4}>
                        <Card>
                            <S.tImage >               
                                <img src={dataImage} />
                            </S.tImage>
                        <S.Maintext>
                            <S.Span>UI/UX design services</S.Span> 
                        </S.Maintext>
                        </Card>
                        </Grid>
                        <Grid xs={12} sm={4}>
                        <Card>
                            <S.tImage >               
                                <img src={dataImage} />
                            </S.tImage>
                        <S.Maintext>
                            <S.Span> Salesforce</S.Span> 
                        </S.Maintext>
                        </Card>
                        </Grid>
                    </Grid.Container>
                         
        </S.Services>
    )
};



