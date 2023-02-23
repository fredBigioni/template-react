import React from 'react';
import { CanByRol } from '../../../components';
import { useSelector } from 'react-redux';
import { ItemMenu, menuObjectList } from './';


export const Menu = () => {
    const { rolId } = useSelector(state => state.auth.user);
    
    
    return (
        <>
            {
                menuObjectList.map(({ itemTitle, urlNavigate, subMenues }) => {
                    return (
                        <CanByRol key={itemTitle}>
                            <ItemMenu
                                
                                itemTitle={itemTitle}
                                rolId={rolId}
                                urlNavigate={urlNavigate}
                                subMenues={subMenues}
                            />
                        </CanByRol>
                    )
                })
            }
        </>
    )
}
