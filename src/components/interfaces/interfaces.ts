import React, { ReactNode } from "react"
import { CarouselItems } from "../Store/CarouselItems/CarouselItems"
import { StatisticPaperItems } from "../Store/StatisticPaperItems/StatisticPaperItems"

type LinkWithIcon = {
    text: string
    icon?: React.ReactNode
}
export type NewsItem = {
    author: string
    content: string
    description: string
    publishedAt: string
    source: {
        id: null | number | string
        name: string
    }
    title: string
    url: string
    urlToImage: string
}

export interface DashboardMenuItemProps {
    label: string
}
export interface MenuListItemProps {
    label: string
    icon?: React.ReactNode
    collapsible?: boolean
}
export interface MenuListItem {
    label: string
    icon?: React.ReactNode
    collapsible?: boolean
    orders?: boolean
    path?: string
}
export interface CollapseProps {
    open: boolean
}
export interface SubMenuItemProps {
    label: string
}
export interface NavMenuItemProps {
    label: string
    icon?: React.ReactNode
    orders?: boolean
    path: string
}
export interface StatisticPaperProps {
    label: string
    labelIcon: React.ReactNode
    visitorsCount?: string
    link: LinkWithIcon
    ordersReceived?: string
    earnings?: string
}
export interface BluePaperLinkProps {
    text: string
    icon?: React.ReactNode
}
export interface CardLabelProps {
    label: string
    icon: React.ReactNode
}
export interface OrderInfoStackProps {
    label: string
    ordersReceived?: string
    earnings?: string
}
export interface MainBannersProps {
    items: StatisticPaperItems
}
export interface SlidesCarouselProps {
    items: CarouselItems
}
export interface CarouselItemProps {
    text: string
    logo?: ReactNode
    background?: string
}
export interface NewsCardProps {
    item: NewsItem
}
export interface SelectComponentProps {
    open: boolean
}