/* eslint-disable @next/next/no-img-element */
import { IconSun, IconMoon, IconArticle, IconUser, IconLogout2, IconTrash, IconEye, IconEdit, IconHeading, IconH1, IconH2, IconH3, IconLink, IconBlockquote, IconCode, IconPhoto, IconList, IconListNumbers, IconBold, IconItalic, IconSquareX, IconPencilPlus, IconCategory } from '@tabler/icons-react';

export const PostIcon = () => <IconArticle size={22} />
export const ProjectIcon = () => <IconUser size={22} />
export const LogoutIcon = () => <IconLogout2 size={22} />
export const DeleteIcon = () => <IconTrash size={22} />
export const ViewIcon = () => <IconEye size={25} />
export const EditIcon = () => <IconEdit size={22} />
export const HeadingIcon = () => <IconHeading size={16} />
export const Heading1Icon = () => <IconH1 size={16} />
export const Heading2Icon = () => <IconH2 size={16} />
export const Heading3Icon = () => <IconH3 size={16} />
export const LinkIcon = () => <IconLink size={16} />
export const QuoteIcon = () => <IconBlockquote size={16} />
export const CodeIcon = () => <IconCode size={16} />
export const ImageIcon = () => <IconPhoto size={16} />
export const ListIcon = () => <IconList size={16} />
export const ListNumberIcon = () => <IconListNumbers size={16} />
export const BoldIcon = () => <IconBold size={16} />
export const ItalicIcon = () => <IconItalic size={16} />
export const CloseIcon = ({ customClass }: { customClass: string | null }) => <IconSquareX size={30} className={`${customClass}`} />
export const CreateIcon = () => <IconPencilPlus size={22} />
export const MenuIcon = () => <IconCategory size={22} />
export const SunIcon = ({ customClass }: { customClass: string | null }) => <IconSun size={22} className={`${customClass} animate-fade animate-duration-300`} />
export const MoonIcon = ({ customClass }: { customClass: string | null }) => <IconMoon size={22} className={`${customClass} animate-fade animate-duration-300`} />

export const TiktokIcon = () => {
    return (
        <img className='h-5' src="/svg/tiktok.svg" alt="tiktok icon" />
    )
}

export const InstagramIcon = () => {
    return (
        <img className='h-5' src="/svg/instagram.svg" alt="instagram icon" />
    )
}

export const YoutubeIcon = () => {
    return (
        <img className='h-5' src="/svg/youtube.svg" alt="youtube icon" />
    )
}

export const LinkedinIcon = () => {
    return (
        <img className='h-10' src="/svg/linkedin.svg" alt="linkedin icon" />
    )
}

export const LinkedinColorIcon = () => {
    return (
        <img className='h-5 w-5' src="/svg/linkedin-color.svg" alt="linkedin-color icon" />
    )
}

export const MailIcon = () => {
    return (
        <img className='h-10' src="/svg/mail.svg" alt="mail icon" />
    )
}

export const GithubIcon = () => {
    return (
        <img className='h-10' src="/svg/github.svg" alt="github icon" />
    )
}

export const ReactIcon = ({ size }: { size: number }) => {
    return (
        <img className={`h-${size}`} src="/svg/react.svg" alt="react icon" title='React' />
    )
}

export const JavascriptIcon = ({ size }: { size: number }) => {
    return (
        <img className={`h-${size}`} src="/svg/javascript.svg" alt="javascript icon" title='JavaScript' />
    )
}

export const HtmlIcon = ({ size }: { size: number }) => {
    return (
        <img className={`h-${size}`} src="/svg/html5.svg" alt="html icon" title='HTML' />
    )
}

export const SassIcon = ({ size }: { size: number }) => {
    return (
        <img className={`h-${size}`} src="/svg/sass.svg" alt="sass icon" title='Sass' />
    )
}

export const ExpressIcon = ({ size }: { size: number }) => {
    return (
        <img className={`h-${size}`} src="/svg/Express.js.svg" alt="express icon" title='ExpressJS' />
    )
}

export const MongoIcon = ({ size }: { size: number }) => {
    return (
        <img className={`h-${size}`} src="/svg/mongodb.svg" alt="mongo icon" title='MongoDB' />
    )
}

export const NextIcon = ({ size }: { size: number }) => {
    return (
        <img className={`h-${size}`} src="/svg/nextjs.svg" alt="next icon" title='NextJS' />
    )
}

export const NodeIcon = ({ size }: { size: number }) => {
    return (
        <img className={`h-${size}`} src="/svg/nodejs.svg" alt="node icon" title='NodeJS' />
    )
}

export const PostgresIcon = ({ size }: { size: number }) => {
    return (
        <img className={`h-${size}`} src="/svg/postgresql.svg" alt="postgresql icon" title='PostgreSQL' />
    )
}

export const ReduxIcon = ({ size }: { size: number }) => {
    return (
        <img className={`h-${size}`} src="/svg/redux.svg" alt="redux icon" title='Redux' />
    )
}

export const TailwindIcon = ({ size }: { size: number }) => {
    return (
        <img className={`h-${size}`} src="/svg/tailwindcss.svg" alt="tailwind icon" title='TailwindCSS' />
    )
}

export const CssIcon = ({ size }: { size: number }) => {
    return (
        <img className={`h-${size}`} src="/svg/css.svg" alt="css icon" title='CSS' />
    )
}

export function findIcon(technology: string) {
    switch (technology.toLowerCase()) {
        case 'react':
            return <ReactIcon size={5} />
            break
        case 'javascript':
            return <JavascriptIcon size={5} />
            break
        case 'html':
            return <HtmlIcon size={5} />
            break
        case 'scss' || 'sass':
            return <SassIcon size={5} />
            break
        case 'express' || 'expressjs':
            return <ExpressIcon size={5} />
            break
        case 'mongo' || 'mongodb':
            return <MongoIcon size={5} />
            break
        case 'next' || 'nextjs':
            return <NextIcon size={5} />
            break
        case 'node' || 'nodejs':
            return <NodeIcon size={5} />
            break
        case 'postgresql':
            return <PostgresIcon size={5} />
            break
        case 'redux':
            return <ReduxIcon size={5} />
            break
        case 'tailwind' || 'tailwindcss':
            return <TailwindIcon size={5} />
            break
        case 'css':
            return <CssIcon size={5} />
            break
        default:
            return technology
            break
    }
}