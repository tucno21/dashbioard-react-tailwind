import { MenuItem } from "../Interfaces/DashboardInterface";
import { BiBarChartAlt2, BiCreditCardFront, BiGridAlt, BiEqualizer, BiTable, BiImage, BiSolidBarChartAlt2 } from 'react-icons/bi';

export const menuItems: MenuItem[] = [
    {
        icon: <BiBarChartAlt2 className="item-icon" />,
        name: 'Dashboard',
        route: '/dashboard',
    },
    {
        icon: <BiCreditCardFront className="item-icon" />,
        name: 'Card',
        route: '/dashboard/card',
    },
    {
        icon: <BiGridAlt className="item-icon" />,
        name: 'Common',
        subMenuItems: [
            { name: 'Alert', route: '/dashboard/alert' },
            { name: 'Badge', route: '/dashboard/badge' },
            { name: 'Buttom', route: '/dashboard/button' },
            { name: 'Modal', route: '/dashboard/modal' },
            { name: 'Toast', route: '/dashboard/toast' },
        ],
    },
    {
        icon: <BiEqualizer className="item-icon" />,
        name: 'Forms',
        subMenuItems: [
            { name: 'Input', route: '/dashboard/input' },
            { name: 'InputValidate', route: '/dashboard/input-validate' },
            { name: 'Checkbox', route: '/dashboard/checkbox' },
            { name: 'Radio', route: '/dashboard/radio' },
            // { name: 'Select', route: '/dashboard/select' },
            { name: 'Toggle', route: '/dashboard/toggle' },
        ],
    },
    {
        icon: <BiTable className="item-icon" />,
        name: 'Datatable',
        route: '/dashboard/datatable',
    },
    {
        icon: <BiImage className="item-icon" />,
        name: 'Carousel',
        route: '/dashboard/carousel',
    },
    {
        icon: <BiSolidBarChartAlt2 className="item-icon" />,
        name: 'Chart',
        route: '/dashboard/chart',
    },
];