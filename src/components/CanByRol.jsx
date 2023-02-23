import React from 'react'

export const CanByRol = ({ children }) => {
    return (
        <>
            {
                children.props.rolId === 1 ?
                    children
                    : children.props.rolId === 2 && children.props.itemTitle !== 'Users' ?
                        children
                        : children.props.rolId === 3 &&
                            (children.props.itemTitle === 'Home' || children.props.itemTitle === 'Tasks' || children.props.itemTitle === 'Update Data Mantis') ?
                            children
                            :
                            <></>
            }
        </>
    )
}
