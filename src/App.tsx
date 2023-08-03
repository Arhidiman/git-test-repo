import React from 'react'
import './App.css'
import gop from './images/me.jpg'

function App() {

    return(

        <>
             <div className='square green'></div>
             <div className='square gray'></div>
             <div className='circle green'></div>
             <div className='circle gray'></div>
            


            <h1>Заголовок bitch</h1>
             <p>
                Когда вы отправляете на удаленный сервер и используете флаг --set-upstream, git устанавливает ветку, на которую вы отправляете, 
                как удаленную ветку отслеживания ветки, которую вы отправляете.
                Добавление ветки удаленного отслеживания означает, что git знает, что вы хотите делать, 
                когда вы будете использовать git fetch, git pull или git push в будущем.
                Он предполагает, что вы хотите синхронизировать локальную и удаленную ветки, которые он отслеживает, и делает все необходимое для достижения этой цели.
                Вы можете добиться того же с помощью git branch --set-upstream-to или git checkout --track. Дополнительные сведения см. на страницах справки git по отслеживанию веток.
             </p>

        </>
       
        
    )
}


export default App