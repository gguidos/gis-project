"use client"
import React from 'react'
import { Button } from '@/components/ui/button';
import * as Icons from '../../icons';
import Rectangle from './rectangle'
import Obstacle from './obstacle';
import Polygon from './polygon';

const sideMenu = ({ current, send }: 
    { current: any, send: Function }) => {
    return (
        <div>
            {/* <Button><Icons.EditorMinimizeToolbar size={24}/></Button>
            <Button><Icons.EditorSelectTool size={24} /></Button> */}

            <Rectangle current={ current } send={ send } />
            <Polygon current={ current } send={ send } />
            {/* <Button><Icons.EditorDrag size={24} /></Button>
            <Button><Icons.EditorAddOptimizer size={24} /></Button> 
            <Button><Icons.EditorAddPanel size={24} /></Button>*/}
            <Obstacle current={ current } send={ send } />
        </div>
    )
};

export default sideMenu;