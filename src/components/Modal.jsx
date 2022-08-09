function Modal({onClick}){
    return(
        <dialog className="modal" open>
            <h2>
                You lost!
            </h2>
            <button className="modal-btn" onClick={onClick}>
                Restart
            </button>
        </dialog>
    )
}

export default Modal;