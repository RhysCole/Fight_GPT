import { type JSX, type LazyExoticComponent, lazy } from "react";
import { type RouteProps } from "react-router";  

export type IRoutes = {
    path: RouteProps["path"],
    element: RouteProps["element"]
}

function cw(Component: LazyExoticComponent<() => JSX.Element>){
    return <Component/>
}

const defaultRoutes: IRoutes[] = [
    {
        path: "/",
        element: cw(lazy(() => import("@/pages/main/upcomingFights/index"))),
    },
]

const fightRoutes: IRoutes[] = [
    {
        path: "upcoming/dashboards",
        element: cw(lazy(() => import("@/pages/main/upcomingFights/index"))),
    },
    {
        path: "upcoming/preFight",
        element: cw(lazy(() => import("@/pages/main/preFight/index"))),
    },
]

const unauthenticatedRoutes: IRoutes[] = [
    {
        path: "/auth/login",
        element: cw(lazy(() => import("@/pages/unauthenticated/login"))),
    },
    {
        path: "/auth/register",
        element: cw(lazy(() => import("@/pages/unauthenticated/register"))),
    },
]

export const registerRoutes = {
    main: [...defaultRoutes,...fightRoutes],
    auth: [...unauthenticatedRoutes]
}