import HomeIcon from '@material-ui/icons/Home';
import BusinessIcon from '@material-ui/icons/Business';
import InfoIcon from '@material-ui/icons/Info';
import ContactMailIcon from '@material-ui/icons/ContactMail';
// import StoreIcon from '@material-ui/icons/Store';

const routes = {
    Links:[
        {
            title:"Home",
            path:"/",
            activeClass:"active",
            icon:<HomeIcon />,
        },
        {
            title:"About",
            path:"/about",
            activeClass:"active",
            icon:<InfoIcon />,
        },
        // {
        //     title:"Shop",
        //     path:"/shop",
        //     activeClass:"active",
        //     icon:<StoreIcon />,
        // },
        {
            title:"Projects",
            path:"/projects",
            activeClass:"active",
            icon:<BusinessIcon />,
        },
        {
            title:"Contact",
            path:"/contact",
            activeClass:"active",
            icon:<ContactMailIcon />,
        },
    ],
    ButtonLinks:[
        {
        title:"Donate",
        path:"/donate",
        activeClass:"aboutBtnActive",
        },
    ],
    SocialLinks:[
        {
            title:"Twitter",
            href:"https://twitter.com/ombayus1",
            className:"fa fa-twitter"
        },
        {
            title:"Instagram",
            href:"https://www.instagram.com/omerbayramcavus/",
            className:"fa fa-instagram"
        },
        {
            title:"Youtube",
            href:"https://www.youtube.com/channel/UCDrOMpnEjJ0tHqvHSWJ3iNA",
            className:"fa fa-youtube-play"
        },
        {
            title:"Github",
            href:"https://github.com/OmBayus",
            className:"fa fa-github"
        },
        {
            title:"LinkedIn",
            href:"https://www.linkedin.com/in/omerbayramcavus/",
            className:"fa fa-linkedin"
        }
    ]
}

export default routes