import { Suspense } from "react";
import { Route, type RouteProps, Routes } from "react-router"

import MainLayout from '../pages/main/layout';
import UnauthenticatedLayout from '../pages/unauthenticated/layout/layout';

import { registerRoutes, type IRoutes } from "./register";

import ProtectedRoute from "@/components/ProtectedRoute";

export const Router = (props: RouteProps) => {
    return(
        <Routes>
            <Route element={<ProtectedRoute/>}>
                {registerRoutes.main.map((route: IRoutes, index: number) => (
                        <Route
                            key={"main-" + index}
                            path={route.path}
                            element={
                                <MainLayout {...props}>
                                    <Suspense>{route.element}</Suspense>
                                </MainLayout>
                            }
                        />
                ))}
            </Route>

            <Route>
                {registerRoutes.auth.map((route: IRoutes, index: number) => (
                    <Route
                        key={"auth-" + index}
                        path={route.path}
                        element={
                            <UnauthenticatedLayout {...props}>
                                <Suspense>{route.element}</Suspense>
                            </UnauthenticatedLayout>
                        }
                    />                  
                ))}
            </Route>

        </Routes>
    )
}