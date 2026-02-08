'use client'

import {
	IconDashboard,
	IconFolder,
	IconGlobe,
	IconListDetails,
	IconPencilPlus,
	IconUsers
} from '@tabler/icons-react'
import Link from 'next/link'
import { NavMain } from '@/components/nav-main'
import {
	Sidebar,
	SidebarContent,
	SidebarHeader,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem
} from '@/components/ui/sidebar'

const data = {
	navMain: [
		{
			title: 'Dashboard',
			url: '/',
			icon: IconDashboard
		},
		{
			title: 'Crear Registro',
			url: '/create-travel',
			icon: IconPencilPlus
		},
		{
			title: 'Lista de Registros',
			url: '/list-travels',
			icon: IconListDetails
		}
	]
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
	return (
		<Sidebar
			collapsible="none"
			className="h-auto border-r"
			{...props}
		>
			<SidebarHeader className="border-b">
				<SidebarMenu>
					<SidebarMenuItem>
						<SidebarMenuButton
							asChild
							className="data-[slot=sidebar-menu-button]:p-1.5!"
						>
							<Link href="#">
								<IconGlobe className="size-6!" />
								<span className="text-base font-semibold">Viajes Acme Inc.</span>
							</Link>
						</SidebarMenuButton>
					</SidebarMenuItem>
				</SidebarMenu>
			</SidebarHeader>
			<SidebarContent>
				<NavMain items={data.navMain} />
			</SidebarContent>
		</Sidebar>
	)
}
