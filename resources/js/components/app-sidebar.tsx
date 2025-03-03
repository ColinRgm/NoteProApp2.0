import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import { HouseIcon } from 'lucide-react';
import AppLogo from './app-logo';
import { PiNumberSquareOneBold, PiNumberSquareTwoBold, PiNumberSquareThreeBold, PiNumberSquareFourBold, PiUsersThree} from "react-icons/pi";
import { NavFooter } from '@/components/nav-footer';


const mainNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        url: '/dashboard',
        icon: HouseIcon,
    },
    {
        title: '1ère année',
        url: '/firstYear',
        icon: PiNumberSquareOneBold
    },
    {
        title: '2ème année',
        url: '/secondYear',
        icon: PiNumberSquareTwoBold
    },
    {
        title: '3ème année',
        url: '/thirdYear',
        icon: PiNumberSquareThreeBold
    },
    {
        title: '4ème année',
        url: '/fourthYear',
        icon: PiNumberSquareFourBold
    },

];


/*
 *
 * Only accessible when log with formator / coach roles
 *
 */
const footerNavItems: NavItem[] = [
        {
        title: 'Apprentis',
        url: '/students',
        icon: PiUsersThree
    }
]

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="inset" className="text-white">
            <SidebarHeader className="bg-[#141e66]">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild>
                            <Link href="/dashboard" prefetch>
                                <AppLogo />
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent className="bg-[#141e66]">
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter className="bg-[#141e66]">
                <NavFooter items={footerNavItems} />
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
