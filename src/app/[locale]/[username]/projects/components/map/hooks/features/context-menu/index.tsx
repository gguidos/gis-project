import { useEffect, useState } from 'react';
import Conditional from '@/components/utils/ConditionalRendering'

const useEdgeContextMenu = ({
    current,
    send
}:{
    current: any,
    send: Function
}) => {
    const [isMenuVisible, setIsMenuVisible] = useState<boolean>(false)
    const [menuPosition, setMenuPosition] = useState<any>({})

    useEffect(() => {
      if (!current.context.mapInstance) return;
        console.log('contextMenu: context menu visible')
        setIsMenuVisible(current.context.contextMenu.visible)
        setMenuPosition(current.context.contextMenu.position)
    }, [
        current.context.mapInstance, 
        current.context.contextMenu.visible,
        current.context.contextMenu.position
    ]);

    const hideMenu = () => {
      send({ type: 'HIDE_MENU' });
  };

    return (
      <div>
        <Conditional showWhen={isMenuVisible}>
       
        <div
                    id="custom-context-menu"
                    style={{
                        display: 'block',
                        position: 'absolute',
                        top: `${menuPosition.y}px`,
                        left: `${menuPosition.x}px`,
                        zIndex: 1000,
                        background: 'white',
                        border: '1px solid #ccc',
                        padding: '8px'
                    }}
                    onMouseLeave={hideMenu}
                >
                    <ul style={{ listStyle: 'none', padding: 0, zIndex: 1001, color: 'black'}}>
                        <li onClick={() => console.log("Rotate logic here")}>Rotate Grid</li>
                        <li onClick={() => console.log("Delete logic here")}>Delete Shape</li>
                    </ul>
                </div>
        </Conditional>
      </div>
    )
}

export default useEdgeContextMenu;