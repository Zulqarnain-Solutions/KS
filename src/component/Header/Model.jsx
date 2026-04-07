import { createPortal } from "react-dom";
/*
This component creates a React Portal.

Instead of rendering inside #root,
it renders inside #modal-root.
*/

function Model({modelIsOpen, setModelIsOpen, children}){

    return createPortal(
        (
            <div
            className={`login-card fixed inset-0 flex items-center justify-center bg-black/40 
                ${modelIsOpen ? '' : 'hidden' }`}
            onClick={() => setModelIsOpen(!modelIsOpen)}
            >
                <div className="bg-white p-8 rounded-xl shadow-2xl w-80"
                onClick={ (e) => e.stopPropagation() }
                >
                    {children}
                </div>
            </div>
        ),
        document.getElementById("model")
    )
}

export default Model;