/* eslint-disable @next/next/no-img-element */
import { IconArticle, IconUser, IconLogout2, IconTrash, IconEye, IconEdit, IconHeading, IconH1, IconH2, IconH3, IconLink, IconBlockquote, IconCode, IconPhoto, IconList, IconListNumbers, IconBold, IconItalic, IconSquareX, IconBrandTiktok, IconBrandInstagram, IconBrandYoutube, IconBrandLinkedin, IconMail, IconBrandGithub } from '@tabler/icons-react';

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
export const CloseIcon = () => <IconSquareX size={30} />

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

export const ReactIcon = () => {
    return (
        <img className='h-5' src="/svg/react.svg" alt="react icon" title='React' />
    )
}

export const JavascriptIcon = () => {
    return (
        <img className='h-5' src="/svg/javascript.svg" alt="javascript icon" title='JavaScript' />
    )
}

export const HtmlIcon = ({ size }: { size: number}) => {
    return (
        <img className={`h-${size}`} src="/svg/html5.svg" alt="html icon" title='HTML' />
    )
}

export const SassIcon = () => {
    return (
        <img className='h-5' src="/svg/sass.svg" alt="sass icon" title='Sass' />
    )
}

export function findIcon(technology: string) {
    switch (technology.toLowerCase()) {
        case 'react':
            return <ReactIcon />
            break
        case 'javascript':
            return <JavascriptIcon />
            break
        // case 'html':
        //     return <HtmlIcon />
        //     break
        case 'scss' || 'sass':
            return <SassIcon />
        default:
            return technology
            break
    }
}