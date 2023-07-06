import "../style/popup.css"
import { AiOutlineClose } from 'react-icons/ai';

function PopUp({ selectedCategory, joke, fetchNextJoke, closePopup }) {



    return (
        <div>
            <div className="Popup">
                <div className="Popup-content">
                    <div>
                        <span> <h2 className="h2" style={{ boxSizing: "border-box", display: "inline-block", marginRight: "50px" }}>{selectedCategory}  </h2></span>

                        <span>
                            
                            <AiOutlineClose stroke="currentColor" onClick={closePopup} className="Close-button" />
                            
                        </span>
                    </div>
                    <div className="popup-para">
                        <p className="joke">"{joke}"</p>

                        <div className="Popup-buttons">
                            <button className="Next-button" onClick={fetchNextJoke}>Next Joke</button>

                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default PopUp;