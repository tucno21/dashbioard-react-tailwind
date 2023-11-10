export interface MenuItem {
    icon: React.ReactNode;
    name: string;
    route?: string;
    subMenuItems?: SubMenuItem[];
}

export interface SubMenuItem {
    name: string;
    route: string;
}

export interface TitleSidebar {
    icon: React.ReactNode;
    title: string;
}