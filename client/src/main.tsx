import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";

import { ConfigProvider } from "./contexts/config";
import { App } from './App';

import { Provider } from "react-redux";
import store from "./contexts/store";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import './styles/app.css';


const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <BrowserRouter>
            <ConfigProvider>
                <Provider store={store}>
                    <QueryClientProvider client={queryClient}>
                        <App />
                    </QueryClientProvider>
                </Provider>
            </ConfigProvider>
        </BrowserRouter>
    </StrictMode>
)