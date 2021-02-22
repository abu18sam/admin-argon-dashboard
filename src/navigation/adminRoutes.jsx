import {ADMIN_ROUTES} from '../constants/RouterConstants';
export const SidebarRoutes = [
    {
        title:'Dashboard',
        key:'dashboard',
        path:`${ADMIN_ROUTES.DASHBOARD}`
    },
    {
        title:'Manage User',
        key:'user-listing',
        path:`${ADMIN_ROUTES.USER_LISTING}`
    }
];

