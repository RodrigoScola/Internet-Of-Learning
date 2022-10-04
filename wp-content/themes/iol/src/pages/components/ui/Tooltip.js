import React, { Children } from 'react';


export const Tooltip = ({
     position = 'right',
     textColor = 'black',
     color = 'gray',
     children,
     text = ''
}) => {
     return <div className="tp">{children}
          <span className={` tp-text_${position} bg-${color} ${textColor}  zoom-in`}>{text}</span>
     </div>
}