import {
    Link,
    Outlet,
    createRootRouteWithContext,
} from "@tanstack/react-router"
import { Button } from "@/components/ui/button"
import { MainContextType } from "@/providers/main-provider"
import { ModalProvider } from "@/providers/modal-provider"
import type { QueryClient } from "@tanstack/react-query"

export const Route = createRootRouteWithContext<
    { queryClient: QueryClient } & Partial<MainContextType>
>()({
    component: Root,
    notFoundComponent: () => {
        return (
            <main className="grid place-items-center h-screen w-full bg-primary-foreground ">
                <div className="shadow rounded-md p-4 flex flex-col gap-2">
                    <Link to="/">
                        <Button>Back to home page</Button>
                    </Link>
                    <Link to="/">
                        <Button>Back to login page</Button>
                    </Link>
                </div>
            </main>
        )
    },
})

function Root() {
    return (
        <>
            <ModalProvider>
                <Outlet />
            </ModalProvider>
        </>
    )
}
