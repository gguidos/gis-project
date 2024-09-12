import Link from 'next/link'
import {
    DropdownMenuItem,
  } from "@/components/ui/dropdown-menu"

export default function SettingsItem() {
    return (
        <DropdownMenuItem>
            <Link href='/settings'>
                Settings
            </Link>
        </DropdownMenuItem>
    )
}