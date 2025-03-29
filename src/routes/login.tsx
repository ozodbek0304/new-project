import Login from "@/components/pages/auth/auth"
import { createFileRoute } from "@tanstack/react-router"

export const Route = createFileRoute("/login")({
    component: Login,
})

