import { Button } from "@/components/ui/button"
import * as Icons from '../../icons'
import Conditional from '@/components/utils/ConditionalRendering'
import { useEffect, useState } from 'react'

export default function Obstacle({ current, send }: { current: any, send: Function }) {
    const [isDrawingObstacle, setIsDrawingObstacle] = useState<boolean>(false)
    
    useEffect(() => {
        setIsDrawingObstacle(current.context.isDrawingObstacle)
    }, [
        current.context.isDrawingObstacle,
    ])

    const setState = () => {
        send({ type: 'INITIALIZE_OBSTACLE'})
    }

    return (
        <>
            <Conditional showWhen={ isDrawingObstacle }>
                <Button disabled>
                    <Icons.EditorObstacle size={24} />
                </Button>
            </Conditional>
            <Conditional showWhen={ !isDrawingObstacle }>
                <Button disabled={isDrawingObstacle} onClick={ () =>  setState() }>
                    <Icons.EditorObstacle size={24} />
                </Button>
            </Conditional>
        </>
    )
}