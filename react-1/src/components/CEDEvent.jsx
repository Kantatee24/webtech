function CEDEvent(){

        function clickHandler(name){
            window.alert("HEllo CeDDDD"+name);
        }
    return(
        <div>
        <button onClick={function xxx(){
           var x = "keow";
           clickHandler(x);
        }}>Click Me!!!</button>

        <button onClick={clickHandler
        }>Click Me!!!</button>
        </div>
    )
}

export default CEDEvent;