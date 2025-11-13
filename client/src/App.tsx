import { Router } from "./router";
import { LoadingEffect } from "./components/LoadingEffect";
export function App() {
    return (
        <LoadingEffect show={false} isError={false} error="Something went wrong">
            <Router />
        </LoadingEffect>
    );
}