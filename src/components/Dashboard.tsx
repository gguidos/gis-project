'use client'
import Link from 'next/link'
import { buttonVariants } from './ui/button'
import { ArrowRight } from 'lucide-react'
import fetch from '@/lib/server-actions/fetch'
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import redirect from '@/lib/server-actions/redirect'
import deleteSessionCookie from '@/lib/server-actions/delete-session-cookie'

export default function Dashboard() {
    return (
        <div>
           <Link
                className={buttonVariants({
                    size: 'sm',
                })}
                href="/map"
            >
                New Calculation <ArrowRight className="ml-1.5 h-5 w-5" />
            </Link>
        </div>
    )
}