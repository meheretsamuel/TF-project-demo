import casualImg from '../../assets/images/clr-circles/casual.svg'
import socialImg from '../../assets/images/clr-circles/social.svg'
import orgImg from '../../assets/images/clr-circles/organization.svg'
import festImg from '../../assets/images/clr-circles/festival.svg'


//let lorem = "Dori me, interimo adapare dori me Ameno, ameno, latire, latire mo Dori me, ameno, oma nare imperavi ameno Dimere, dimere, mantiro, mantire mo Ameno"
let lorem = " "
let btnTxt = "More"

export const casual = {
    title: 'Casual',
    desc: lorem,
    ftr: {
        1: '500 - 100 People',
        2: 'Advanced Customization and Support',
        3: 'All features from before',
    },
    img: casualImg,
    lecolor: '#626ed4',
    button: btnTxt,
    where: '/createvent/casual',
    circled: false
};

export const social = {
    title: 'Social',
    desc: "For private events, between friends, families and communities, such as birthday parties and graduation ceremonies, that are still big enough to warrant a gate.",
    ftr: {
        1: '50 - 100 People',
        2: 'Email Delivery',
        3: ' ',
    },
    img: socialImg,
    lecolor: '#02a499',
    button: btnTxt,
    where: '/createvent/social',
    circled: false
};

export const organization = {
    title: 'Organization',
    desc: "For corporate, office or faculty context meetings that are semi-public, for training seminars and workshops that are big and semi-public enough to require a gate.",
    ftr: {
        1: '150 - 300 People',
        2: 'Email or SMS',
        3: ' ',
    },
    img: orgImg,
    lecolor: '#38a4f8',
    button: btnTxt,
    where: '/createvent/organization',
    circled: false
};

export const festival = {
    title: 'Festival',
    desc: "For completely open fairs and expos that require more systems of ticket distribution . Larger in scale than the previous two groups, this offers more options.",
    ftr: {
        1: '300+ People',
        2: 'Email or SMS',
        3: ' ',
    },
    img: festImg,
    lecolor: '#ec4561',
    button: btnTxt,
    where: '/createvent/festival',
    circled: false
};