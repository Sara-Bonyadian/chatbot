import './Clear.css'

export function Clear({setChatMessages}){
    function clearStorage(){
        setChatMessages([]);
    }

    return(
        <button 
            onClick={clearStorage}
            className='clear-button'>
                Clear
        </button>
    )
}