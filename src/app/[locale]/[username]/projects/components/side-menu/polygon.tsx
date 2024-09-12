import { Button } from "@/components/ui/button"
import * as Icons from '../../icons'
import Conditional from '@/components/utils/ConditionalRendering'
import { useEffect, useState } from 'react'

export default function Polygon({ current, send }: { current: any, send: Function }) {
    const [isDrawingPolygon, setIsDrawingPolygon] = useState<boolean>(false)
    
    useEffect(() => {
        if (!current.context.isMapReady) return
        setIsDrawingPolygon(current.context.isDrawingPolygon)
        if (current.context.shapeCounter >= current.context.config.restrictions.shapeQty) {
            setIsDrawingPolygon(true)
        }
    }, [
        current.context.isMapReady,
        current.context.isDrawingPolygon,
        current.context.shapeCounter,
        current.context.config.restrictions.shapeQty
    ])

    const setState = () => {
        send({ type: 'INITIALIZE_POLYGON' })
    }

    return (
        <>
            <Conditional showWhen={ isDrawingPolygon }>
                <Button disabled>
                    <Icons.EditorPolygonIcon size={24} />
                </Button>
            </Conditional>
            <Conditional showWhen={ !isDrawingPolygon  }>
                <Button disabled={isDrawingPolygon } onClick={ () =>  setState() }>
                    <Icons.EditorPolygonIcon size={24} />
                </Button>
            </Conditional>
        </>
    )
}