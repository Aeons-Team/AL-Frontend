import { motion } from 'framer-motion'

interface IconProps {
    name: string 
    height: string
    width: string
    variants: any
}

export default function Icon({ name, height, width, ...remaining }: IconProps) {
    const style = {
        height,
        width,
        fill: 'var(--color-secondary)'
    }

    if (name == 'home') {
        return (
            <motion.svg style={style} {...remaining} viewBox="0 0 10 9" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.86081 4.20427C9.86081 4.48644 9.62193 4.70748 9.35121 4.70748H8.84161L8.85275 7.21881C8.85275 7.26113 8.84957 7.30346 8.84479 7.34578V7.59817C8.84479 7.94461 8.55973 8.22522 8.20779 8.22522H7.95299C7.93547 8.22522 7.91796 8.22522 7.90044 8.22365C7.87815 8.22522 7.85585 8.22522 7.83355 8.22522H7.31599H6.93379C6.58185 8.22522 6.29679 7.94461 6.29679 7.59817V7.22194V6.21866C6.29679 5.9412 6.06906 5.71703 5.78719 5.71703H4.76799C4.48612 5.71703 4.25839 5.9412 4.25839 6.21866V7.22194V7.59817C4.25839 7.94461 3.97334 8.22522 3.62139 8.22522H3.23919H2.73119C2.7073 8.22522 2.68341 8.22365 2.65952 8.22208C2.64041 8.22365 2.6213 8.22522 2.60219 8.22522H2.34739C1.99545 8.22522 1.71039 7.94461 1.71039 7.59817V5.84244C1.71039 5.82833 1.71039 5.81265 1.71199 5.79854V4.70748H1.20079C0.914143 4.70748 0.691193 4.48801 0.691193 4.20427C0.691193 4.06319 0.738968 3.93778 0.850443 3.82804L4.93361 0.324415C5.04509 0.214681 5.17249 0.199005 5.28396 0.199005C5.39544 0.199005 5.52284 0.230358 5.61839 0.308739L9.68563 3.82804C9.81303 3.93778 9.87673 4.06319 9.86081 4.20427Z" fill="#DBDBDB"/>
            </motion.svg>
        )
    }

    if (name == 'features') {
        return (
            <motion.svg style={style} {...remaining} viewBox="0 0 10 9" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.80992 0.998098C5.91562 0.752654 5.83679 0.466004 5.62001 0.308346C5.40323 0.150688 5.10763 0.165021 4.90518 0.340594L0.31878 4.3537C0.139624 4.51136 0.0751274 4.76397 0.159331 4.98612C0.243534 5.20828 0.458522 5.35877 0.6968 5.35877H2.69439L1.31668 8.57283C1.21098 8.81828 1.28981 9.10493 1.50659 9.26259C1.72336 9.42025 2.01897 9.40591 2.22142 9.23034L6.80782 5.21723C6.98698 5.05958 7.05147 4.80697 6.96727 4.58481C6.88306 4.36266 6.66987 4.21396 6.4298 4.21396H4.43221L5.80992 0.998098Z" fill="#DBDBDB"/>
            </motion.svg>

        )
    }

    if (name == 'pricing') {
        return (
            <motion.svg style={style} {...remaining} viewBox="0 0 10 9" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.47457 3.92546C7.47457 4.74779 7.20762 5.50741 6.75794 6.12371L9.02606 8.39363C9.25001 8.61757 9.25001 8.98126 9.02606 9.20521C8.80211 9.42915 8.43843 9.42915 8.21448 9.20521L5.94636 6.93529C5.33007 7.38677 4.57044 7.65192 3.74812 7.65192C1.68961 7.65192 0.0216675 5.98397 0.0216675 3.92546C0.0216675 1.86695 1.68961 0.199005 3.74812 0.199005C5.80662 0.199005 7.47457 1.86695 7.47457 3.92546ZM4.10643 2.06223C4.10643 1.86516 3.94519 1.70392 3.74812 1.70392C3.55105 1.70392 3.3898 1.86516 3.3898 2.06223V2.31305C3.25365 2.34351 3.11749 2.39188 2.99208 2.46534C2.74305 2.61404 2.52806 2.87381 2.52985 3.25183C2.53165 3.61552 2.74484 3.84484 2.97237 3.981C3.16944 4.09924 3.41489 4.17449 3.61017 4.23182L3.64062 4.24078C3.86636 4.30886 4.03118 4.3626 4.14226 4.43247C4.23363 4.4898 4.24617 4.52922 4.24796 4.57938C4.24975 4.66896 4.21571 4.72271 4.14226 4.7675C4.05268 4.82304 3.91115 4.85708 3.75887 4.8517C3.56 4.84454 3.37368 4.78183 3.13003 4.69942C3.08882 4.68509 3.04582 4.67075 3.00104 4.65642C2.81292 4.59372 2.61048 4.69583 2.54777 4.88216C2.48507 5.06848 2.58718 5.27272 2.77351 5.33542C2.80755 5.34617 2.84517 5.35871 2.88279 5.37305C3.03149 5.425 3.20348 5.48412 3.38801 5.52354V5.78869C3.38801 5.98576 3.54925 6.147 3.74633 6.147C3.9434 6.147 4.10464 5.98576 4.10464 5.78869V5.54145C4.24796 5.511 4.39129 5.46083 4.52028 5.38021C4.77647 5.22076 4.96996 4.94845 4.96459 4.57401C4.95921 4.21032 4.75498 3.97563 4.52386 3.82872C4.31783 3.69972 4.05985 3.6209 3.85919 3.55998L3.84665 3.5564C3.61733 3.48653 3.4543 3.43636 3.33964 3.36828C3.24648 3.31275 3.24469 3.2805 3.24469 3.24825C3.24469 3.18196 3.26977 3.1318 3.35577 3.08163C3.45251 3.0243 3.59942 2.99026 3.74095 2.99206C3.91294 2.99385 4.10285 3.03147 4.29992 3.08522C4.49162 3.13538 4.6869 3.02251 4.73885 2.83082C4.79081 2.63912 4.67615 2.44384 4.48445 2.39188C4.368 2.36142 4.23901 2.33097 4.10643 2.30768V2.06223Z" fill="#DBDBDB"/>
            </motion.svg>

        )
    }

    if (name == 'chat') {
        return (
            <motion.svg style={style} {...remaining} viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 0C0.448438 0 0 0.448457 0 1.00004V5.50024C0 6.05182 0.448438 6.50028 1 6.50028H2.5V7.75033C2.5 7.84565 2.55313 7.93159 2.6375 7.97378C2.72187 8.01597 2.82344 8.0066 2.9 7.95034L4.83281 6.50028H7C7.55156 6.50028 8 6.05182 8 5.50024V1.00004C8 0.448457 7.55156 0 7 0H1Z" fill="#613CF5"/>
            </motion.svg>
        )
    }

    throw new Error('icon should have a valid name')
}