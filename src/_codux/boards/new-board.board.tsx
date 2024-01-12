import React from 'react'
import { createBoard } from '@wixc3/react-board';

export default createBoard({
    name: 'New Board',
    Board: () => null,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1078,
        canvasWidth: 300,
        canvasHeight: 227,
        windowBackgroundColor: '#d83232'
    }
});
