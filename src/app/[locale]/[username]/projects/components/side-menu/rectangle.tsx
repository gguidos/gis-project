import { Button } from "@/components/ui/button"
import * as Icons from '../../icons'
import Conditional from '@/components/utils/ConditionalRendering'
import { useEffect, useState } from 'react'

export default function Rectangle({ current, send }: { current: any, send: Function }) {
    const [isDrawingRectangle, setIsDrawingRectangle] = useState<boolean>(false)

    useEffect(() => {
        if (!current.context.isMapReady) return
        setIsDrawingRectangle(current.context.isDrawingRectangle)
        if (current.context.shapeCounter >= current.context.config.restrictions.shapeQty) {
            setIsDrawingRectangle(true)
        } 
    }, [
        current.context.isMapReady,
        current.context.shapeCounter,
        current.context.isDrawingRectangle,
        current.context.config.restrictions.shapeQty])

    const setState = () => {
        send({ type: 'INITIALIZE_RECTANGLE' })
    }

    return (
        <>
            <Conditional showWhen={ isDrawingRectangle }>
                <Button disabled>
                    <Icons.EditorRectangleIcon size={24} />
                </Button>
            </Conditional>
            <Conditional showWhen={ !isDrawingRectangle }>
                <Button disabled={ isDrawingRectangle } onClick={ () =>  setState() }>
                    <Icons.EditorRectangleIcon size={24} />
                </Button>
            </Conditional>
        </>
    )
}