function PopUp({onClick}) {
    return(
        <dialog className="modal" open>
            <h2>
                You won!
            </h2>
            <button className="modal-btn" onClick={onClick}>
                Play again
            </button>
        </dialog>
    )
}

export default PopUp;