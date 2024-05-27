import React from 'react'
import styled from 'styled-components'
const History = () => {
  return (
    <div>
      
    </div>
  )
}

export default History
const Section = styled.section`

.orders {
    margin-top: 4rem;
    color: black;
    width: 100%;
    .orders__details {
        display: flex;
        justify-content: space-between;
        margin: 1rem 1rem ;

        div {
            display: flex;
            gap: 1rem;
           color: grey;
        }
    }
    .orders__table {
        display: flex;
        justify-content: space-between;
        margin: 1rem 0;
        color: grey;
        table {
            border-collapse: collapse;
            width: 100%;
             td {
                text-align: center;
                padding: 5px;
                justify-content: space-evenly;
               
                img{
                height: 2.5rem;
                width: 2.5rem;
                border-radius: 3rem;
            }
                
            }
            
        }
    }
}
`;