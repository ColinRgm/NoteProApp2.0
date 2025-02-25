import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import { HouseIcon, Tally1Icon, Tally2Icon, Tally3Icon, Tally4Icon } from 'lucide-react';
import AppLogo from './app-logo';

const mainNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        url: '/dashboard',
        icon: HouseIcon,
    },
    {
        title: '1ère année',
        url: '/firstYear',
        icon: Tally1Icon
    },
    {
        title: '2ème année',
        url: '/secondYear',
        icon: Tally2Icon
    },
    {
        title: '3ème année',
        url: '/thirdYear',
        icon: Tally3Icon
    },
    {
        title: '4ème année',
        url: '/fourthYear',
        icon: Tally4Icon
    }
];

export function AppSidebar() {
    return (
        <Sidebar collapsible="icon" variant="inset" className="bg-[#141e66] text-white">
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

            <SidebarContent className="bg-[#141e66] text-white">
                <NavMain items={mainNavItems} />
            </SidebarContent>

            <SidebarFooter className="bg-[#141e66] text-white">
                <NavUser />
            </SidebarFooter>
        </Sidebar>
    );
}
