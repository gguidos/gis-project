import {
    DropdownMenuItem,
  } from "@/components/ui/dropdown-menu"
import deleteSession from '@/lib/server-actions/delete-session-cookie'
import redirect from '@/lib/server-actions/redirect'

export default function Logout() {
    const logout = () => {
        deleteSession()
        redirect('/')
    }
    return (
        <DropdownMenuItem onClick={() => logout()}>
            Log out
        </DropdownMenuItem>
    )
}