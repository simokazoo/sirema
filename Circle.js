import React from 'react';

const styles = {
    circle: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderColor: 'grey',
        borderStyle: 'solid',
        borderWidth: 5,
        transform: 'rotate(45deg)'  
    },
    circle25: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderColor: 'grey blue blue blue',
        borderStyle: 'solid',
        borderWidth: 5,
        transform: 'rotate(45deg)'  
    },
    circle50: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderColor: 'grey grey blue blue',
        borderStyle: 'solid',
        borderWidth: 5,
        transform: 'rotate(45deg)'  
    },
    circle75: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderColor: 'grey grey grey blue',
        borderStyle: 'solid',
        borderWidth: 5,
        transform: 'rotate(45deg)'  
    },
}



const colors = [
    {label: styles.circle}
]

export default function Circle() {

    return( 
    <div style={styles.circle50} />);
}

//  <div>
// {colors.map(color => (
//     <div> {color.label}</div>
            
//          ))}
// </div> 
         