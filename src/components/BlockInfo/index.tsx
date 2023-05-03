import { useEffect } from 'react'
import { useMotionValue } from 'framer-motion'
import Spinner from 'react-spinner-material'
import { useAppStore, useAppStoreShallow } from '../../data/AppStore'
import { theme } from '../../data/ThemeContext'
import * as S from './style'

export default function BlockInfo() {
    const { instanceId, contracts } = useAppStoreShallow(state => ({
        instanceId: state.instanceId,
        contracts: state.contracts
    }))

    const contract = contracts && instanceId != -1 && contracts[instanceId % contracts.length]

    const x = useMotionValue(0)
    const y = useMotionValue(0)

    useEffect(() => {
        useAppStore.subscribe(state => {
            x.jump(state.cursor.x)
            y.jump(state.cursor.y)
        })
    }, [])

    const variants = {
        show: {
            opacity: 1
        },

        hidden: {
            opacity: 0
        }
    }

    return (
        <S.BlockInfo style={{x, y}} variants={variants} initial='hidden' animate={instanceId == -1 ? 'hidden' : 'show'}>
            {
                instanceId != -1 && <>
                {
                    !contracts
                        ? <Spinner radius={10} color={theme.colors.active} stroke={1.5} />
                        : (
                            <S.Contract>
                                <S.ContractTitle>Contract</S.ContractTitle>

                                <S.ContractInfo>
                                    <S.ContractKey>Id:</S.ContractKey>
                                    <S.ContractValue>{contract.contractId}</S.ContractValue>
                                </S.ContractInfo>

                                <S.ContractInfo>
                                    <S.ContractKey>Owner:</S.ContractKey>
                                    <S.ContractValue>{contract.owner}</S.ContractValue>
                                </S.ContractInfo>
                            </S.Contract>
                        )
                }
                </>
            }
        </S.BlockInfo>
    )
}