import React,{useState} from 'react'

export default function About(props) {
    // const [myStyle,setMyStyle] = useState({
    //     color: '#232222',
    //     backgroundColor: '#ffffff'
    // });

    // const [btntext, setBtnText] = useState("Enable Dark Mode");
    
    // const toggleStyle = () =>{
    //     if(myStyle.color === '#ffffff'){
    //         setMyStyle({
    //             color: '#232222',
    //             backgroundColor: '#ffffff'
    //         });

    //         setBtnText("Enable Light Mode");
    //     }else{
    //         setMyStyle({
    //             color: '#ffffff',
    //             backgroundColor: '#232222'
    //         });

    //         setBtnText("Enable Dark Mode");
    //     }
    // }

    let myStyle = {
        color: props.mode === 'dark' ? 'white':'black',
        backgroundColor: props.mode === 'dark' ? '#212529e3':'white',
        border: '2px solid',
        borderColor: props.mode === 'dark' ? 'white' :'#212529e3'
    }

    return (
        <div className='p-3 rounded' style={myStyle}>
            <div className="accordion" id="accordionExample">
                <h3 className='my-3'>About Us</h3>
                <div className="accordion-item" >
                    <h2 className="accordion-header">
                        <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>Analyz your text</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            This feature allows you to examine and understand your text in detail. It can check for grammar errors, readability, word count, and more, helping you improve your writing for clarity and effectiveness.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            <strong>Free to Use</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                           The tool is completely free with no hidden costs. You can access all its features without any payment or subscription, making it accessible to everyone.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                           <strong>Browser Compatible</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body" style={myStyle}>
                            The tool works smoothly on all major web browsers (Chrome, Firefox, Safari, Edge, etc.). No downloads are needed—just open it in your browser and start using it instantly.
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className='my-3'>
                <button onClick={toggleStyle} type='button' className='btn btn-danger'>{btntext}</button>
            </div> */}
        </div>

    )
}
